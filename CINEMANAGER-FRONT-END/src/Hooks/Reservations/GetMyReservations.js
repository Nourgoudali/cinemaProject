import {useState, useEffect} from "react";
import axios from 'axios';

function GetMyReservations() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    const time = (startTime) => {
        const date = new Date(startTime);
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
        return `${hours}H${minutes}`;
    };

    useEffect(() => {
        const myReservations = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                setError('You Are Not Logged In !');
                return;
            }
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/myReservations`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                setReservations(response.data.reservations);
            } catch (err) {
                console.log(err, 'Error Fetching Reservations');
            }
        };
        myReservations();
    }, []);

    return {
        time,
        reservations,
        error,
    };
}

export default GetMyReservations;