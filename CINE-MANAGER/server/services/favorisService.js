import favorisDb from "../model/favorisModel.js";


class FavorisService {

    async addFavorite(clientId, movieId) {

        const existingFavorite = await favorisDb.findOne({ client: clientId, movie: movieId});
        if(existingFavorite) {
            throw new Error(`Movie with ID ${movieId} is already in favorites`);
        };

        const favorite = new favorisDb({
            client: clientId,
            movie: movieId,
        });

        return await favorite.save();

    }

    async deleteFavorite(clientId, movieId) {
        const result = await favorisDb.deleteOne({client: clientId, movie: movieId});

        if(result.deletedCount === 0){
            throw new Error(`Favorite not found for movie ID ${movieId}`);
        }
        return result;
    }

    async getFavoritesByClient(clientId) {
        return await favorisDb.find( {client: clientId} ).populate('movie');
    }
}

export default new FavorisService();