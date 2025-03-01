import { useState, useEffect } from 'react';
import axios from 'axios';

const useLatestSession = () => {
    const [latestSessions, setLatestSessions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestSessions = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getLatestSessions`, {
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                });
                setLatestSessions(response.data.sessions);
            } catch (err) {
                setError('Failed to fetch the latest sessions');
            }
        };

        fetchLatestSessions();
    }, []);

    const movieTime = (startTime, endTime) => {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const fullTime = end - start;


        const hour = Math.floor(fullTime / (1000 * 60 * 60 ));
        const minutes = Math.floor((fullTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((fullTime % (1000 * 60)) / 1000);

        return `${hour}H ${minutes}m ${seconds}s`;
    };

    return { latestSessions, error, movieTime };
};

export default useLatestSession;
