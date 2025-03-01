import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function GetSession() {

        const [sessions, setSessions] = useState([]);
        const [error, setError] = useState(null);

        useEffect(() => {
            const getSessions = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getAvailableSession`);
                    setSessions(response.data.getSession);
                } catch (err) {
                    setError("Failed to get sessions.");
                }
            };

            getSessions();
        }, []);
    return {
        sessions,
        setSessions,
        error
    };
}

export default GetSession;