import React from 'react';
import useDeleteRoom from "../../Hooks/Room/useDeleteRoom.js";

function RoomCard({name, roomId, onDelete, onUpdate}) {

    const {deleteRoom} = useDeleteRoom();
    const handleDelete = async() => {
        const deletedId = await deleteRoom(roomId);
        if(deletedId){
            onDelete(deletedId);
        }
    }
    const handleUpdate = async () => {
        onUpdate(roomId);
    }

    return (
        <div
            className="bg-gradient-to-r from-gray-50  shadow-2xl shadow-gray-700/30 to-white  rounded-lg w-[24%] border-gray-300 border">
            <div className="p-4">
                <h1 className="text-black text-2xl font-bold font-serif">{name}</h1>
                <div className="flex justify-between px-2">
                    <h1 className="text-black font-medium text-3xl font-serif"></h1>
                        <div className="flex gap-2">
                            <div onClick={handleDelete} className="bg-red-300 py-3 px-3 rounded cursor-pointer hover:bg-red-500 duration-300 group">
                                <svg className="w-6 h-6 dark:text-red-800 group-hover:text-red-100 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                            </div>
                            <div onClick={handleUpdate} className="bg-blue-300 py-3 px-3 rounded cursor-pointer hover:bg-blue-500 duration-300 group">
                                <svg className="w-6 h-6 dark:text-blue-800 group-hover:text-blue-100 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;