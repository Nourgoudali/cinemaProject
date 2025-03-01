import movieService from '../services/movieService.js';

const addMovie = async (req, res) => {
    try {
        if (!req.files || !req.files.poster || !req.files.trailer) {
            return res.status(400).json({ message: "Poster and trailer files are required" });
        }
        const savedMovie = await movieService.addMovie(req.body, {
            poster:req.files.poster[0],
            trailer: req.files.trailer[0]
        });
        res.status(200).json( {
            message: "movie created successfully", movie: savedMovie
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating a movie" });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const updatedData = req.body;

        const updatedMovie = await movieService.updateMovie(movieId, updatedData);

        res.status(200).json({
            message: "movie updated successfully", movie: updatedMovie 
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while updating a movie" 
        });
    }
}

const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const deleteMovie = await movieService.deleteMovie(movieId);
        
        res.status(200).json({
            message: "movie deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting a movie" 
        });
    }
}

const getAllMovies = async (req, res) => {
    try {
        const getAllMovie = await movieService.getAllMovies();
        res.status(200).json({
            message: "all movies : ", getAllMovie
        });
    }catch (err) {
        res.status(500).json({
            message : err.message || "cannot get moviee"
        });
    }
}

const getMovieById = async (req, res) => {
    try {
        const movieId = req.params.id;
        const getMovieById = await movieService.getMovieById(movieId);
        res.status(200).json({
            messsage: getMovieById
        });

    } catch (error) {
        res.status(500).json({
            message: (error, "cannot fetch movie details")
        })
    };
}

const countMovie = async (req, res) => {
    try {
        const countMovie = await movieService.movieCount();
        res.status(200).json(countMovie)
    } catch (error) {
        res.status(500).json({
            message: (error, "cannot count movies")
        })
    };
}


export default { addMovie, updateMovie, deleteMovie, getAllMovies, getMovieById, countMovie };