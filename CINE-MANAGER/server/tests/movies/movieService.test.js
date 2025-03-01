import movieService from '../../services/movieService.js';
import movieDb from '../../model/movieModel.js';

jest.mock('../../model/movieModel.js');

describe('MovieService', () => {
    const mockMovie = {
        _id: '1234567890',
        title: 'Test Movie',
        description: 'This is a test movie',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should add a new movie', async () => {
        const movieData = { title: 'Test Movie', description: 'This is a test movie' };

        movieDb.prototype.save = jest.fn().mockResolvedValue(mockMovie);

        const result = await movieService.addMovie(movieData);

        expect(result).toEqual(mockMovie);
        expect(movieDb.prototype.save).toHaveBeenCalled();
    });

    it('should update a movie', async () => {
        const updatedData = { title: 'Updated Test Movie' };

        movieDb.findByIdAndUpdate = jest.fn().mockResolvedValue({ ...mockMovie, ...updatedData });

        const result = await movieService.updateMovie(mockMovie._id, updatedData);

        expect(result).toEqual({ ...mockMovie, ...updatedData });
        expect(movieDb.findByIdAndUpdate).toHaveBeenCalledWith(mockMovie._id, updatedData, { new: true });
    });

    it('should delete a movie', async () => {
        movieDb.findByIdAndDelete = jest.fn().mockResolvedValue(mockMovie);

        const result = await movieService.deleteMovie(mockMovie._id);

        expect(result).toEqual(mockMovie);
        expect(movieDb.findByIdAndDelete).toHaveBeenCalledWith(mockMovie._id);
    });

    it('should get all movies', async () => {
        const mockMovies = [mockMovie];
        movieDb.find = jest.fn().mockResolvedValue(mockMovies);

        const result = await movieService.getAllMovies();

        expect(result).toEqual(mockMovies);
        expect(movieDb.find).toHaveBeenCalled();
    });
});
