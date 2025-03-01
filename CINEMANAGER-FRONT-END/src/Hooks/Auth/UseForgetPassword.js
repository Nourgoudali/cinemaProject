import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";

function UseForgetPassword() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);



    useEffect(() => {
        if(success) {
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    useEffect(() => {
        if(error) {
            setShowErrorMessage(true);
            const timer = setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_APP_URL}/api/password-reset`, {email});
            setSuccess('Link Sent To Your Email Successfully');
        } catch (error) {
            setError("Error Sending Password Reset Email, Try Again");
            console.log("error sending password reset email");
        }
    };

    return {
        setEmail,
        showSuccessMessage,
        showErrorMessage,
        handleSubmit,
        email,
        success,
        error
    }
}

export default UseForgetPassword;