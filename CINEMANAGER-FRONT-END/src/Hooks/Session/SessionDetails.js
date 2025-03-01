import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

function SessionDetails({id}) {
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getSessionById/${id}`);
                setSession(response.data.getSessionById);
            } catch (err) {
                console.log('Error Fetching sessions.', err);
                setError(err)
            }
        };
        if(id) {
            getSession();
        }
    }, [id]);

    const movieTime = (startTime, endTime) => {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const fullTime = end - start;


        const hour = Math.floor(fullTime / (1000 * 60 * 60 ));
        const minutes = Math.floor((fullTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((fullTime % (1000 * 60)) / 1000);

        return `${hour}H ${minutes}m ${seconds}s`;
    };

    return {
        session,
        error,
        movieTime,
    };
}

export default SessionDetails;