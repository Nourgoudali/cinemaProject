import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const AddMovie = () => {
            const [formData, setFormData] = useState({
                title: "",
                description: "",
                categories: [],
                poster: null,
                trailer: null,
            });

            const handleChange = (e) => {
                const {name, value, type, files} = e.target;
                if(type === 'file') {
                    setFormData({...formData, [name]: files[0] });
                } else {
                  setFormData({...formData, [name]: value});
                }
        };

            const handleSubmit = async (e) => {
                e.preventDefault();

                const token = localStorage.getItem("token");
                const formDataToSubmit = new FormData();
                formDataToSubmit.append("title", formData.title);
                formDataToSubmit.append("description", formData.description);
                formDataToSubmit.append("categories", JSON.stringify(formData.categories));
                formDataToSubmit.append("poster", formData.poster);
                formDataToSubmit.append("trailer", formData.trailer);

                try {
                    const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/createMovie`, formData, {
                        headers: {
                            Authorization: `bearer ${token}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    console.log(response.data);
                    toast.success("Movie Created Successfully");
                } catch (err) {
                    toast("Failed Create Movie");
                }

    }
return {
    handleChange,
    handleSubmit,
    formData
};


}

export default AddMovie;