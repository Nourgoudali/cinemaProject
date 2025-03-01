import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useGetAllMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getAllMovies`);
                setMovies(response.data.getAllMovie); // Set movies to the getAllMovie property
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('Cannot get movies:', error);
            }
        };
        getAllMovies();
    }, []);

    return { movies, loading };
}

export default useGetAllMovies;