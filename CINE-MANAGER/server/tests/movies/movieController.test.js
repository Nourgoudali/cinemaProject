import movieController from '../../controller/movieController.js';
import movieService from '../../services/movieService.js';

jest.mock('../../services/movieService.js');

describe('MovieController', () => {
    let req, res;

    beforeEach(() => {
        req = { body: {}, params: { id: '1234567890' } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() };
        jest.clearAllMocks();
    });

    it('should add a movie', async () => {
        const mockMovie = { title: 'Test Movie', description: 'This is a test movie' };
        movieService.addMovie.mockResolvedValue(mockMovie);

        req.body = mockMovie;

        await movieController.addMovie(req, res);

        expect(movieService.addMovie).toHaveBeenCalledWith(mockMovie);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'movie created successfully', movie: mockMovie });
    });

    it('should update a movie', async () => {
        const mockUpdatedMovie = { title: 'Updated Movie', description: 'This is an updated test movie' };
        movieService.updateMovie.mockResolvedValue(mockUpdatedMovie);

        req.body = mockUpdatedMovie;

        await movieController.updateMovie(req, res);

        expect(movieService.updateMovie).toHaveBeenCalledWith('1234567890', mockUpdatedMovie);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'movie updated successfully', movie: mockUpdatedMovie });
    });

    it('should delete a movie', async () => {
        movieService.deleteMovie.mockResolvedValue({});

        await movieController.deleteMovie(req, res);

        expect(movieService.deleteMovie).toHaveBeenCalledWith('1234567890');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'movie deleted successfully' });
    });

    it('should get all movies', async () => {
        const mockMovies = [{ title: 'Test Movie 1' }, { title: 'Test Movie 2' }];
        movieService.getAllMovies.mockResolvedValue(mockMovies);

        await movieController.getAllMovies(req, res);

        expect(movieService.getAllMovies).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'all movies : ',
            getAllMovie: mockMovies
        });
    });
});
