import axios from "axios";
import {toast} from "react-toastify";

function DeleteCategory() {

    const deleteCategory = async (categoryId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(`${import.meta.env.VITE_APP_URL}/api/deleteCategory/${categoryId}`,
                {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                }
                );
            if(response.status === 200) {
                toast.success("Category Deleted Successfully");
                return categoryId;
            }
        } catch (error) {
            toast.error("Failed To Delete Category")
        }
    }
    return {deleteCategory};
}

export default DeleteCategory;