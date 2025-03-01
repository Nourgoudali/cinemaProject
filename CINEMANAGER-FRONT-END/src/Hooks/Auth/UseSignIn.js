import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

function UseSignIn() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/");
            }
        };
    
        window.addEventListener("storage", handleStorageChange);
    
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    

    useEffect(() => {
        if(error) {
            setShowErrorMessage(true);
            const timer = setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/login`, {
                email: formData.email,
                password: formData.password,
            });


            const token = response.data.token;
            localStorage.setItem('token', token);

            const decodedToken = jwtDecode(token);
            localStorage.setItem('userId', decodedToken.id);
            const userRole = decodedToken.role;
            localStorage.setItem('role', decodedToken.role);
            localStorage.setItem('userName', decodedToken.name);
            localStorage.setItem('email', decodedToken.email);
            localStorage.setItem('phone', decodedToken.phone);
            localStorage.setItem('image', decodedToken.image);



            if(userRole === 'admin') {
                console.log('Admin Logged In Successfully ', response.data);
                navigate('/admin/Dashboard');
            }else {
                console.log('Client Logged In Successfully ', response.data);
                navigate('/home');
            }
        } catch (err) {
            if(err.response && err.response.status === 401) {
                setError('Invalid Email Or Password')
            } else {
                setError('An unexpected error occurred.');
            }
            console.error("There was an error creating the account", err);
        }
    };

    return {
        handleChange,
        handleSubmit,
        formData,
        error,
        showErrorMessage
    };
}

export default UseSignIn;