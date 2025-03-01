import mongoose from "mongoose";

 var sessionSchema = new mongoose.Schema ({
    startTime: {
        type: Date,
        required : true,
    },

    endTime: {
        type: Date,
        required : true,
    },

    movieId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'movies', 
        required: true,
    },

    hallId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'halls',
        required: true,
    },

     seats: [{
        seatNumber: { type: Number, required : true },
         isReserved: { type: Boolean, required : false },
     }],

    availability: {
        type: Boolean,
        default: true, 
    },

    price: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },


 })

 const sessionDb = mongoose.model('sessions', sessionSchema);

 export default sessionDb;