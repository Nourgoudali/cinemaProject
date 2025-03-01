import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function UseSignUp() {
    const  [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/createClient`, {
                name: formData.fullName,
                email: formData.email,
                password: formData.password
            });
            console.log(response.data);
            navigate('/signin');
        } catch (err) {
            setError(err.response ? err.response.data.message : "somthing went wrong");
        }
    };
    return {
        handleSubmit,
        handleChange,
        error,
        formData
    };
}

export default UseSignUp;