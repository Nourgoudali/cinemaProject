import clientService from "../services/clientService.js";

const getAllClients = (req, res) => {
    clientService.getAllClients()
    .then(clients => {
        res.status(200).json(clients)
    })
    .catch(error => {
        res.status(500).json({
            message : 'cannot get All Clients'
        });
    });
}

const updateProfile = async (req, res) => {
    try {
        const clientId = req.params.id;
        const updatedData = req.body;

        const file = req.files ? req.files.profilePicture[0] : null; 

        const updatedProfile = await clientService.updateProfile(clientId, updatedData, file);
        
        res.status(200).json({
            message: "Profile updated successfully",
            updatedProfile
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Cannot update profile"
        });
    }
};


export default {getAllClients, updateProfile};