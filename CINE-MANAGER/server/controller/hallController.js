import hallService from '../services/hallService.js'


const addHall = async (req, res) => {
    try {
        const savedHall = await hallService.addHall(req.body);
        res.status(200).json({
            message : "hall created successfully", hall: savedHall
        });
    } catch (err) {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a hall"
        });
    }
};

const updateHall = async (req, res) => {
    try {
        const hallId = req.params.id;
        const updatedData = req.body;

        const updatedHall = await hallService.updateHall(hallId, updatedData);
        res.status(200).json({
            message: "Hall Updated Successfully", hall: updatedHall
        });
    } catch (err) {
        res.status(500).json({
            message : "Some error occurred while updating a hall" 
        });
    }
}

const deleteHall = async (req, res) => {
    try {
        const hallId = req.params.id;

        const deleteHall = await hallService.deleteHall(hallId);
        res.status(200).json({
            message : "Hall Deleted Successfully"
        });
    } catch (err) {
        res.status(500).json({
            message : err.message || "Cannot deleting hall"
        });
    }
}

const getAllHall = async (req, res) => {
    try {
        const halls = await hallService.getAllHall();
        res.status(200).json({
            message: "Halls fetched successfully",
            halls: halls
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while fetching halls"
        });
    }
}


const countHall = async (req, res) => {
    try {
        const countHall = await hallService.hallCount();
        res.status(200).json(countHall)
    } catch (error) {
        res.status(500).json({
            message: err.messgae || "cannot count halls"
        });
    }
}

export default { addHall, updateHall, deleteHall, getAllHall, countHall };