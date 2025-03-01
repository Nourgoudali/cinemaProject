import movieDb from "../model/movieModel.js";

class ratingService {

    async addRating(movieId, clientId, rating) {
        const movie = await movieDb.findById(movieId);
        if(!movie) {
            throw new Error(`Movie With Id ${movieId} Not Found`)
        }

        const existingRatingIndex = movie.clientRatings.findIndex(r => r.client.toString() === clientId);
        if (existingRatingIndex !== -1) {
            throw new Error(`You have already rated this movie`);
        }

        movie.clientRatings.push({
            client: clientId,
            rating: rating,
        });

        const totalRatings = movie.clientRatings.length;
        const sumRatings = movie.clientRatings.reduce((sum, ratingObj) => sum + ratingObj.rating, 0); 
        movie.movieRating = sumRatings / totalRatings;
        return await movie.save();
    }
}

export default new ratingService();