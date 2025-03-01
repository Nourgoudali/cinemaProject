import ratingService from "../services/ratingService.js";
import jwt from "jsonwebtoken";



const addRating = async (req, res) => {
    try {
        const token = req.headers["authorization"]?.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const clientId = decoded.id;

        const movieId = req.params.id;
        const rating = req.body.rating;

        const updateMovie = await ratingService.addRating(movieId, clientId, rating);

        res.status(200).json({
            message: "Your Rate Set Succeffully",
            rating: updateMovie,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot Rate This Movie : " + err.message,
        });
    }
};

export default {addRating};