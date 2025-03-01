import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";

function UseUpdateComment() {
    const updateComment = async (movieId, commentId, updatedComment) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(`${import.meta.env.VITE_APP_URL}/api/updateComment/${movieId}/${commentId}`,
                { comment: updatedComment},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Comment Updated Successfully");
            return response.data;
        } catch(err) {
            toast.error("Cannot Updated This Comment");
        }
    };
    return {updateComment}
}

export default UseUpdateComment;