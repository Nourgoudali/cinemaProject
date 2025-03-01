import userDb from '../model/usersModel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

class AuthService {

    async registerClient(clientData) {
        const { name, email, password } = clientData;

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = new userDb({
            name, 
            role : 'client',
            email,
            password : hashedPassword
        });

        return await client.save();
    }

    async login (email, password) {
        try {

        const user = await userDb.findOne({ email });
        if(!user) throw new Error ("User Not Found!");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new Error ("Invalid Credentials!");

        const token = jwt.sign({ id: user._id, role: user.role, name:user.name, email:user.email, phone:user.phone, image:user.image }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        return { token, role: user.role };
        } catch (error) {
            console.error('Error during login:', error.message);
            throw new Error('Authentication failed!');
        }
    }

    async sendResetPasswordEmail(email) {
        const user = await userDb.findOne({ email });
        if(!user) throw new Error ("User Not Found");

        const resetToken = crypto.randomBytes(26).toString('hex');
        const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');

        user.passwordResetToken = resetTokenHash;
        user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

        await user.save();

        const resetUrl = `http://localhost:5173/NewPassword/${resetToken}`;

        const message = `You requested a password reset. Click the link to reset: ${resetUrl}`;

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset',
            text: message
        });

        return { message: 'Reset token sent to email!' };
    }

    async resetPassword(token, newPassword) {
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
        const user = await userDb.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }
        });

        if (!user) throw new Error("Token is invalid or has expired");

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        const authToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        return { token: authToken, message: 'Password reset successful' };
    }

}

export default new AuthService();