import searchService from "../services/searchService.js";


const searchMovies = async (req, res) => {
    try {
        const query = req.query; // Get the query parameters from the request
        const movies = await searchService.searchMovies(query);
        res.status(200).json({
            message: "Movies found",
            movies,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "An error occurred while searching for movies",
        });
    }
};

export default {searchMovies};
