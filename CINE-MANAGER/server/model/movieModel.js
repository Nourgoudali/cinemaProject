    import mongoose from "mongoose";

    var moviesSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        trailer: {
            type: String,
            required: true,
        },
        movieRating: {
            type: Number,
            min: 0,
            max: 5, 
        },
        clientRatings: [{
            client: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'clients', 
                required: true, 
            },
            rating: {
                type: Number,
                min: 0,
                required: true,
            },
        }],
        comments: [{
            client: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users', 
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        }],
        categories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
        }]
    });

    const movieDb = mongoose.model('movies', moviesSchema);

    export default movieDb;
