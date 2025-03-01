import React, {useEffect, useState} from 'react';
import axios from "axios";

function UsersCount() {

        const [userCount, setUserCount] = useState();

        useEffect(() => {
                const getUsersCount = async () => {
                    const token = localStorage.getItem('token')
                    try {
                        const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/user-count`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                }
                            });
                        if(response.status === 200) {
                            setUserCount(response.data);
                        }
                    } catch (error){
                        console.log('error fetching userCount', error);
                    }
                }
                getUsersCount();
        }, []);
    return {userCount}
}

export default UsersCount;