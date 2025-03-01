import { useEffect, useState } from 'react';
import axios from 'axios';

function useAddCategory() {
    const [success, setSuccess] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (success) {
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const addCategory = async (categoryName, removeForm) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_APP_URL}/api/createdCategory`,
                { name: categoryName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                setSuccess('Category Created Successfully!');
                removeForm();
                return response.data.data;
            }
        } catch (error) {
            console.error('Cannot Create Category');
        }
    };

    return { showSuccessMessage, success, addCategory };
}

export default useAddCategory;
