    import movieDb from "../model/movieModel.js";
    import dotenv from 'dotenv';
    import minio from '../../minio.js';

    dotenv.config();

    class MovieService {

            async addMovie(movieData, files) {
                const { title, description, categories } = movieData;

                if (!files.poster || !files.trailer) {
                    throw new Error("File is required");
                }

                const posterUrl = await this.uploadMoviePoster(files.poster, 'posters');
                const trailerUrl = await this.uploadMoviePoster(files.trailer, 'trailers')

                const movie = new movieDb({
                    title,
                    description,
                    picture: posterUrl,
                    trailer: trailerUrl,
                    categories,
                });

                return await movie.save();
            }




        async updateMovie(movieId, updatedData) {

            const updateMovie = await movieDb.findByIdAndUpdate(movieId, updatedData, { new: true });

            if(!updatedData) {
                throw new Error (`movie with ID ${movieId} not found`);
            }
            return updateMovie;
        }


        async deleteMovie(movieId) {
            const deleteMovie = await movieDb.findByIdAndDelete(movieId);

            return deleteMovie;
        }

        async getAllMovies() {
            const movies = await movieDb.find().populate('categories', 'name');
            return movies;
        }

        async uploadMoviePoster(file, folder) {
            const bucketName = 'cinemanager';
            const fileName = `${folder}/${file.originalname}`;

            const exists = await minio.bucketExists(bucketName);
            if (!exists) {
                await minio.makeBucket(bucketName, 'us-east-1');
            }


            await minio.fPutObject(bucketName, fileName, file.path);
            return `http://127.0.0.1:9000/${bucketName}/${fileName}`;
        }

        async getMovieById(movieId) {
            const getMovieById = await movieDb.findById(movieId).populate('categories').populate({path: 'comments.client', select: 'name'});
            return getMovieById;
        }

        async movieCount () {
            const countMovie = await movieDb.countDocuments();
            return countMovie;
        }
    }



    export default new MovieService();