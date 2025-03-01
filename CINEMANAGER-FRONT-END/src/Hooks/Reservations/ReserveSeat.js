import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ReserveSeat() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleReserveSeat = async (sessionId, seatNumber) => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if(!token) {
            navigate("/signin");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/reserveSeat`, {sessionId, seatNumber, userId}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
            console.log(`Seat number ${seatNumber} reserved successfully`, response.data);

        } catch (err) {
            setError('Error Reserving Seat');
        }
    }
    return {
        handleReserveSeat,
        error,
    }
}

export default ReserveSeat;