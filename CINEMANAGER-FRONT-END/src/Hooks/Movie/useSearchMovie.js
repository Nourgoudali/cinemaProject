import axios from 'axios';
import { useState } from 'react';
import {toast} from "react-toastify";

const useSearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovies = async (title = '', category = '') => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/search`, {
                params: { title, category },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMovies(response.data.movies);
        } catch (err) {
            toast.error("Search No Result")
        } finally {
            setLoading(false);
        }
    };

    return { movies, loading, error, searchMovies };
};

export default useSearchMovies;
