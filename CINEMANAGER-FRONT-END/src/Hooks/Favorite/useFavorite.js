import axios from 'axios';
import { toast } from 'react-toastify';

const useFavorite = () => {
    const addFavorite = async (movieId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/addFavorite`,
                { movieId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Movie Saved Successfully");
            return response.data;
        } catch (err) {
            toast.error("Movie Already Saved");
        }
    };

    const deleteFavorite = async (movieId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${import.meta.env.VITE_APP_URL}/api/deleteFavorite`, {
                data: { movieId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Movie Removed from Favorites");
            return response.data;
        } catch (err) {
            toast.error("Failed to Remove Favorite");
        }
    };

    return { addFavorite, deleteFavorite };
};

export default useFavorite;
