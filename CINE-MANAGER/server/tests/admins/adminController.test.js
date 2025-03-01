import adminController from '../../controller/adminController.js'
import adminService from '../../services/adminService.js'

jest.mock('../../services/adminService.js');

describe('AdminController', () => {
    let req, res;

    beforeEach(() => {
        req = { body: {}, params: { id: '9876654321' } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() };
        jest.clearAllMocks();
    });

    it('should add an admin', async () => {
        const mockAdmin = { name: 'test admin', email: 'testadmin@test.com' };

        adminService.addAdmin.mockResolvedValue(mockAdmin);

        req.body = mockAdmin;

        await adminController.addAdmin(req, res);

        expect(adminService.addAdmin).toHaveBeenCalledWith(mockAdmin);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: ' admin created successfully', admin: mockAdmin });
    });


    it('should update an admin', async () => {
        const mockUpdatedAdmin = { name: 'Updated Admin' };

        adminService.updateAdmin.mockResolvedValue(mockUpdatedAdmin);

        req.body = mockUpdatedAdmin;

        await adminController.updateAdmin(req, res);

        expect(adminService.updateAdmin).toHaveBeenCalledWith('9876654321', mockUpdatedAdmin);
        expect(res.status).toHaveBeenCalledWith(200);
        // Adjust the response structure and message
        expect(res.json).toHaveBeenCalledWith({
            message: 'admin updated successfully',
            data: mockUpdatedAdmin
        });
    });


    it('should delete an admin', async () => {
        adminService.deleteAdmin.mockResolvedValue(true);

        await adminController.deleteAdmin(req, res);

        expect(adminService.deleteAdmin).toHaveBeenCalledWith('9876654321');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Admin Deleted Successfully',
        });
    });

    it('should get all admins', async () => {
        const mockAdmins = [{ name: 'Admin 1' }, { name: 'Admin 2' }];

        adminService.getAllAdmins.mockResolvedValue(mockAdmins);

        await adminController.getAllAdmins(req, res);

        expect(adminService.getAllAdmins).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockAdmins);
    });

});