import React, {useEffect, useState} from 'react';
import axios from "axios";

function GetAllCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            const token = localStorage.getItem('token');

            const getCategories = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/getAllCategories`, {
                        headers: {
                            Authorization: `bearer ${token}`,
                        }
                    });
                    setCategories(response.data.data);
                } catch(err) {
                    console.log(err, 'failed fetch categories');
                }
            }
            getCategories();
    }, []);

    return {categories, setCategories};
}

export default GetAllCategories;