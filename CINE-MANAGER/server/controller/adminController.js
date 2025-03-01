import adminService from "../services/adminService.js";


const addAdmin = async (req, res) => {
    try {
        const savedAdmin = await adminService.addAdmin(req.body);
        res.status(201).json({ message: " admin created successfully", admin: savedAdmin});
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating a admin"});
    }
};


const updateAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const updateData = req.body;

        const updateAdmin = await adminService.updateAdmin(adminId, updateData);

        res.status(200).json({
            message: "admin updated successfully",
            data: updateAdmin
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error occurred while updating the user"
        });
    }
};


const deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        
        const deleteAdmin = await adminService.deleteAdmin(adminId);
        res.status(200).json({
            message: "Admin Deleted Successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error occurred while deleting the user"
        })
    }
}

const getAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.getAllAdmins();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error occurred while retrieving admins"
        })
    }
}


const countUsers = async (req, res) => {
    try {
        const count = await adminService.countUsers();
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Cannot Count Users"
        });
    }
}


const toggleBanUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const updatedUser = await adminService.toggleBanUser(userId);

        const action = updatedUser.banned ? "banned" : "unbanned";

        res.status(200).json({
            message: `User ${action} successfully`,
            data: updatedUser
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error occurred while updating the user's ban status"
        });
    }
};





export default {addAdmin, updateAdmin, deleteAdmin, getAllAdmins, countUsers, toggleBanUser};