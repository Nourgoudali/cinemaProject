import React, {useEffect, useState} from 'react';
import axios from "axios";

function UseGetFavoris() {

        const [favorites, setFavorites] = useState([]);

        useEffect(() => {
            const getMyFavorites = async () => {
                const token = localStorage.getItem('token');
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getFavorites`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        });
                    if(response.status === 200) {
                        setFavorites(response.data.favorites);
                        console.log(favorites)


                    }
                } catch (error) {
                    console.log(error, 'Cannot get Favoris')
                }
            }

            getMyFavorites();
        }, [])
    return {favorites}
}

export default UseGetFavoris;