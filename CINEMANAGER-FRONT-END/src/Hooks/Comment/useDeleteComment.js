import axios from "axios";
import { toast } from "react-toastify";

const useDeleteComment = (movieId, commentId) => {
    const deleteComment = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`${import.meta.env.VITE_APP_URL}/api/deleteComment/${movieId}/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.status !== 200) {
                throw new Error('Failed To Delete Comment');
            }

            toast.success("Comment Deleted Successfully");
        } catch (error) {
            console.log(error.response ? error.response.data.message : error.message);
            toast.error("Failed to Delete This Comment");
        }
    };

    return { deleteComment };
};

export default useDeleteComment;