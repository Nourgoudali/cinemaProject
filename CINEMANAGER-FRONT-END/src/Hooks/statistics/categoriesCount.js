import React, {useEffect, useState} from 'react';
import axios from "axios";

function CategoriesCount() {

    const [categoryCount, setCategoryCount] = useState();

    useEffect(() =>  {
        const getCategoryCount = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/category-count`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                if(response.status === 200) {
                    setCategoryCount(response.data);
                }
            } catch (error) {
                console.log(error, "Cannot Get Count Categories");
            }
        }

        getCategoryCount();
    }, []);

    return {categoryCount}
}

export default CategoriesCount;