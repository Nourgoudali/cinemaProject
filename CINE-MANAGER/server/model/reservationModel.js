import mongoose from "mongoose";

var reservationSchema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sessions",
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },

    seatNumber: {
        type: Number,
        required : true,
    },

    reservedAt: {
        type: Date,
        default : Date.now,
    }
});

const reservationDb = mongoose.model('reservations', reservationSchema);
export default reservationDb;