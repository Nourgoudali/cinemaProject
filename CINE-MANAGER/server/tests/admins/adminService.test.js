import adminService from '../../services/adminService.js';
import userDb from "../../model/usersModel.js";
import bcrypt from "bcryptjs";

jest.mock('../../model/usersModel.js');
jest.mock('bcryptjs');

describe('adminService', () => {
    const mockAdmin = {
        _id: '845653467',
        name: 'testAdmin',
        role: 'admin',
        email: 'testAdmin@test.com',
        password: 'testAdmin2024',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should add a new admin', async () => {
        const adminData = { name: 'testAdmin', email: 'testAdmin@test.com', password: 'testAdmin2024' };

        bcrypt.hash.mockResolvedValue('hashedPassword');

        userDb.prototype.save = jest.fn().mockResolvedValue(mockAdmin);

        const result = await adminService.addAdmin(adminData);

        expect(bcrypt.hash).toHaveBeenCalledWith('testAdmin2024', 10);
        expect(result).toEqual(mockAdmin);
    });

    it('should update an admin', async () => {
        const adminId = '9876654321';
        const updateData = { name: 'Updated Admin', password: 'newPassword' };

        bcrypt.hash.mockResolvedValue('newHashedPassword');
        userDb.findByIdAndUpdate = jest.fn().mockResolvedValue({
            ...mockAdmin,
            name: 'Updated Admin',
            password: 'newHashedPassword'
        });

        const result = await adminService.updateAdmin(adminId, updateData);

        expect(bcrypt.hash).toHaveBeenCalledWith('newPassword', 10);
        expect(result.name).toBe('Updated Admin');
        expect(result.password).toBe('newHashedPassword');
    });



    it('should delete an admin', async () => {
        const adminId = '9876654321';

        userDb.findByIdAndDelete = jest.fn().mockResolvedValue(mockAdmin);

        const result = await adminService.deleteAdmin(adminId);

        expect(userDb.findByIdAndDelete).toHaveBeenCalledWith(adminId);
        expect(result).toEqual(mockAdmin);
    });
       // Mock the find method
    it('should get all admins', async () => {
        const admins = [mockAdmin, { ...mockAdmin, _id: '1234567890', name: 'Second Admin' }];

        userDb.find.mockResolvedValue(admins);

        const result = await adminService.getAllAdmins();

        expect(result).toEqual(admins);
    });


})
