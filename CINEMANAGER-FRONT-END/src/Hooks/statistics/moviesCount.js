import React, {useEffect, useState} from 'react';
import axios from "axios";

function MoviesCount() {

    const [movieCount, setMovieCount] = useState();

    useEffect(() => {
        const getmovieCount = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/movie-count`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }
                )
                if(response.status === 200) {
                    setMovieCount(response.data);
                }
            } catch (err) {
                console.log(err, 'cannot count movies')
            }
        }
        getmovieCount()

    }, [])
    return {movieCount}
}

export default MoviesCount;