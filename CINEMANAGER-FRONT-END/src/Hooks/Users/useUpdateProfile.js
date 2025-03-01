import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function UseUpdateProfile() {
    const navigate = useNavigate();

        const updateProfile = async (formData) => {
            try {
                const token = localStorage.getItem('token');
                const clientId = localStorage.getItem('userId');
                const response = await axios.put(`${import.meta.env.VITE_APP_URL}/api/updateProfile/${clientId}`, formData, {
                        headers: {
                            "Content-Type": 'multipart/form-data',
                            Authorization: `Bearer ${token}`,
                        },
                    });
                if(response.status === 200) {
                    toast.success("Profile Updated Successfully");
                }
                return response;
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Cannot Update Profile";
                toast.error(errorMessage);
            }
        }
    return {updateProfile}
}

export default UseUpdateProfile;