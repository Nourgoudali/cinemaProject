import jwt from "jsonwebtoken";

const generateToken = (payload) => {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN, // Should be a string like '2h'
        });
        return token;
    } catch (error) {
        console.error('Error generating token:', error.message);
        throw error;
    }
};

export default new generateToken;
