import axios from 'axios';
import {toast} from "react-toastify";

const useBanUser = () => {

    const banUser = async (userId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.put(`${import.meta.env.VITE_APP_URL}/api/user/ban/${userId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }

            );
            const isBanned = response.data.data.banned;

            if (isBanned) {
                toast.success("User Banned Successfully");
            } else {
                toast.success("User Unbanned Successfully");
            }

            return response.data;
        } catch (error) {
            toast.error("Cannot Ban/Unban This User");
        }
    };

    return { banUser };
};

export default useBanUser;
