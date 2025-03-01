import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function UseNewPassword() {
        const { token } = useParams();
        const [newPassword, setNewPassword] = useState('');
        const [error, setError] = useState(null);
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                await axios.post(`${import.meta.env.VITE_APP_URL}/api/reset-password/${token}`, {
                    newPassword
                });
                navigate('/signin');
            } catch (error) {
                setError(error);
            }
        };
    return {
        setNewPassword,
        error,
        handleSubmit,
    }
}

export default UseNewPassword;