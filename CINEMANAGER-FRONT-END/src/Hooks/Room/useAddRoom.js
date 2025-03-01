import React from 'react';
import {toast} from "react-toastify";
import axios from "axios";

function UseAddRoom() {

    const addRoom = async (roomName, roomSeats, roomCapacity, removeRoom) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/createHall`,
                {
                 name: roomName,
                 seats: roomSeats,
                 capacity: roomCapacity
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
            if(response.status === 200) {
                toast.success("Room Craeted Successfully");
                removeRoom();
                return response.data.hall;
            }
        } catch (error) {
            toast.error(error, "Failed Create Room");
        }
    };

    return {addRoom};
}

export default UseAddRoom;