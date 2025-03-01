    import axios from "axios";
    import {toast} from "react-toastify";

    function UseUpdateRoom() {

        const updateRoom = async (roomId, updatedData) => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.put(`${import.meta.env.VITE_APP_URL}/api/updateHall/${roomId}`, updatedData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                    });
                if(response.status === 200) {
                    const updatedRoom = response.data;
                    toast.success("Room Updated Successfully");
                    return updatedRoom;
                }
            } catch (error) {
                toast.error("Failed Update This Room", error);
            }
        }
        return {updateRoom};
    }

    export default UseUpdateRoom;