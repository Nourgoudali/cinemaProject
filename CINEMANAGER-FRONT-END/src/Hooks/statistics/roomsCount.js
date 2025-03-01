import React, {useEffect, useState} from 'react';
import axios from "axios";

function RoomsCount() {

    const [roomCount, setRoomCount] = useState();

    useEffect(()=> {
        const getRoomsCount = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/hall-count`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                if(response.status === 200) {
                    setRoomCount(response.data);
                }
            } catch (error) {
                console.log(error,'Cannot Get Count Of Rooms')
            }
        }
        getRoomsCount();
    }, [])
    return {roomCount}
}

export default RoomsCount;