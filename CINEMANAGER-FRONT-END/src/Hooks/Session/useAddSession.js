import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";

function UseAddSession() {

    const addSession = async (sessionData, removeForm, setSessions) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/createSession`,sessionData,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
            if(response.status === 200) {
                toast.success("Session Created Successfully");
                setSessions(prevSessions => [...prevSessions, response.data.savedSession]);
                removeForm();
                console.log(response.data)
                return response.data.savedSession;
            }
        } catch (error) {
            toast.error("Cannot Create Session", error)
        }
    };



    return {addSession}
}

export default UseAddSession;