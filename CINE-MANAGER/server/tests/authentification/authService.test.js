import authService from "../../services/authService.js";
import userDb from "../../model/usersModel.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

jest.mock('../../model/usersModel.js');

jest.mock('nodemailer', () => ({
    createTransport: jest.fn().mockReturnValue({
        sendMail: jest.fn().mockResolvedValue(true),  // Mock de sendMail
    }),
    }
));

describe('AuthService', () => {
    const mockUser = {
        _id: '9876654321',
        name: 'test unitaire',
        role: 'client',
        email: 'test@test.com',
        password: 'test2024',
        save: jest.fn().mockResolvedValue(mockUser),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it ('should register a client', async () => {
        const clientData = {
            name: 'test unitaire',
            email: 'test@test.com',
            password: 'test2024',
        };

        userDb.prototype.save = jest.fn().mockResolvedValue(mockUser);
        const result = await authService.registerClient(clientData);

        expect(userDb).toHaveBeenCalledWith({
            name: clientData.name,
            role: 'client',
            email: clientData.email,
            password: expect.any(String),
        });

        expect(result).toEqual(mockUser);
    });

    it('should login a client', async () => {
        userDb.findOne = jest.fn().mockResolvedValue(mockUser);
        jest.spyOn(bcrypt, 'compare').mockReturnValue(true);

        const result = await authService.login(mockUser.email, 'test2024');

        expect(result).toHaveProperty('token');
        expect(result.role).toBe('client');
    });

    it('should send reset password email', async () => {
        userDb.findOne = jest.fn().mockResolvedValue(mockUser);
        nodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockResolvedValue(true),
        });

        const response = await authService.sendResetPasswordEmail(mockUser.email);
        expect(response).toEqual({ message: 'Reset token sent to email!' });
    });

    it('should reset password', async () => {
        const resetToken = 'resetToken';
        userDb.findOne = jest.fn().mockResolvedValue(mockUser);
        jest.spyOn(bcrypt, 'hash').mockResolvedValue('newHashedPassword');

        const response = await authService.resetPassword(resetToken, 'newPassword');

        expect(response.message).toBe('Password reset successful');
        expect(response).toHaveProperty('token');
    });
});


