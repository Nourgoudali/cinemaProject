import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

function UseRating(movieId) {
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);


    const submitRating = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/addRating/${movieId}`,
                {rating},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
            toast.success("Rating Successfully");
            return response.data;
        } catch (err) {
            toast.error("Can't Rate This Movie");
            setError(err.response.data.message || "Error submitting rating");
        }
    };



    return {
        rating,
        setRating,
        submitRating,
    }
}

export default UseRating;