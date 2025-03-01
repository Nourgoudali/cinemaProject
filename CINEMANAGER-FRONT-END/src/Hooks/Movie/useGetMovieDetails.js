import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetMovieDetails(movieId) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getMovieDetails/${movieId}`);
                setMovie(response.data.messsage);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        useEffect(() => {
            if(movieId){
                fetchMovieDetails();
            }
        }, [movieId]);


    return { movie, loading, error, fetchMovieDetails };
}

export default useGetMovieDetails;
