import reservationService from "../services/reservationService.js";
import reservationDb from "../model/reservationModel.js";


const reserveSeat = async (req, res) => {
    try {
        const { sessionId, seatNumber, userId, userEmail } = req.body;

        const reservation = await reservationService.reserveSeat(sessionId, seatNumber, userId, userEmail);
        res.status(200).json({
            message: `Seat number ${seatNumber} reserved successfully`,
            reservation,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Cannot reserve seat",
        });
    }
};

const updateReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const updateData = req.body;

        const updatedReservation = await reservationService.updateReservation(reservationId, updateData);
        res.status(200).json({
            message: "reservation updated successfully", updatedReservation
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "cannot update reservation"
        });
    };
}

const deleteReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;

        const deleteResrvation = await reservationService.deleteReservation(reservationId);
        res.status(200).json({
            message: "reservation deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "cannot deleted this reservation"
        });
    }
}

const myReservations = async (req, res) => {
    try {
        const userId = req.user.id;
        const reservations = await reservationDb.find({ userId })
        .populate({
            path: 'sessionId',
            populate: { path: 'movieId', model: 'movies' } 
        });
        res.status(200).json({
            message: 'Reservations Fetched Successfully',
            reservations,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || 'Unable To Fetch Reservations'
        });
    }
}

export default { reserveSeat, updateReservation, deleteReservation, myReservations };