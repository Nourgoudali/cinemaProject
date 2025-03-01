import favorisService from "../services/favorisService.js";
import jwt from "jsonwebtoken";

const addFavorite = async (req, res) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const clientId = decoded.id;

        const movieId = req.body.movieId;

        const savedFavorite = await favorisService.addFavorite(clientId, movieId);
        res.status(200).json({
            message: ("Movie Saved Successfully"),
            favorite: savedFavorite,
        });
    } catch(err) {
        res.status(500).json({
            message: "Failed to Save Movie",
            error: err.message,
        });
    }
}

const deleteFavorite = async (req, res) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const clientId = decoded.id;

        const movieId = req.body.movieId; 

        await favorisService.deleteFavorite(clientId, movieId);
        res.status(200).json({
            message: "Favorite deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to delete favorite",
            error: err.message,
        });
    }
}


const getFavorites = async (req, res) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const clientId = decoded.id;

        const favorites = await favorisService.getFavoritesByClient(clientId);

        res.status(200).json({
            message: "Favorites retrieved successfully",
            favorites: favorites,
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to retrieve favorites",
            error: err.message,
        });
    }
}


export default {addFavorite, deleteFavorite, getFavorites};