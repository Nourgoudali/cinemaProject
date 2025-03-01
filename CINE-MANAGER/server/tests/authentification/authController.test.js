import request from 'supertest';
import express from 'express';
import authController from '../../controller/authController.js'
import authService from '../../services/authService';

const app = express();
app.use(express.json());

// Mocking the authService
jest.mock('../../services/authService.js');

app.post('/api/createClient', authController.create);
app.post('/api/login', authController.login);
app.post('/api/password-reset', authController.requestPasswordReset);
app.post('/api/reset-password/:token', authController.resetPassword);

describe('AuthController', () => {
    it('should create a client', async () => {
        authService.registerClient = jest.fn().mockResolvedValue({ message: 'Client created' });

        const response = await request(app)
            .post('/api/createClient')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                password: 'test2024',
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('client registered successfully');
    });

    it('should log in a client', async () => {
        authService.login = jest.fn().mockResolvedValue({ token: 'testToken', role: 'client' });

        const response = await request(app)
            .post('/api/login')
            .send({ email: 'test@example.com', password: 'test2024' });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Client logged in successfully');
    });

    it('should request password reset', async () => {
        authService.sendResetPasswordEmail = jest.fn().mockResolvedValue({ message: 'Reset token sent to email!' });

        const response = await request(app)
            .post('/api/password-reset')
            .send({ email: 'test@example.com' });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Reset token sent to email!');
    });

    it('should reset password', async () => {
        authService.resetPassword = jest.fn().mockResolvedValue({ message: 'Password reset successful', token: 'newToken' });

        const response = await request(app)
            .post('/api/reset-password/testToken')
            .send({ newPassword: 'newPassword' });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Password reset successful');
    });
});
