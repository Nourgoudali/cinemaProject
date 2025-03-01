import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies', 
        required: true,
    },
}, { timestamps: true });

const favorisDb = mongoose.model('favorites', favoritesSchema);

export default favorisDb;