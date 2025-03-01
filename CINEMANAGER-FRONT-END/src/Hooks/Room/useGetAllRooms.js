import React, {useState, useEffect} from 'react';
import axios from "axios";

function UseGetAllRooms() {

            const [rooms, setRooms] = useState([]);


                useEffect(() => {
                    const getAllRooms = async () =>  {
                        const token = localStorage.getItem("token");
                        const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getAllHall`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                }
                            });
                        setRooms(response.data.halls);
                        console.log(response.data.halls);
                    }

                    getAllRooms();
                }, []);




    return {
        rooms,
        setRooms
    }
}

export default UseGetAllRooms;