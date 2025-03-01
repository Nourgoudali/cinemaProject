import React, {useEffect, useState} from 'react';
import useAddRoom from "../../Hooks/Room/useAddRoom.js";
import useUpdateRoom from "../../Hooks/Room/useUpdateRoom.js";



function RoomForm({removeForm, onAddRoom, onUpdateRoom, room, isUpdate}) {
        const [roomName, setRoomName] = useState('');
        const [roomSeats, setRoomSeats] = useState('');
        const [roomCapacity, setRoomCapacity] = useState('');

    const {addRoom} = useAddRoom();
    const {updateRoom} = useUpdateRoom();

    useEffect(() => {
        if(isUpdate && room) {
            setRoomName(room.name || '');
            setRoomSeats(room.seats || '');
            setRoomCapacity(room.capacity || '');
        } else {
            setRoomName('');
            setRoomSeats('');
            setRoomCapacity('');
        }
    }, [room, isUpdate])

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'roomName') setRoomName(value);
        else if (name === 'roomSeats') setRoomSeats(value);
        else if (name === 'roomCapacity') setRoomCapacity(value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(isUpdate) {
                const updatedRoom = await updateRoom(room._id, {
                    name: roomName,
                    seats: roomSeats,
                    capacity: roomCapacity
                });
                if(updatedRoom && updatedRoom._id) {
                    onUpdateRoom(updatedRoom);
                }
            } else {
                const newRoom = await addRoom(roomName, roomSeats, roomCapacity, removeForm);
                if (newRoom && newRoom._id) {
                    onAddRoom(newRoom);
                }
            }
            removeForm();
        } catch (error) {
            console.error("Error adding room:", error);
        }
    };

    const handleFormClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div  className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={removeForm} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={handleFormClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[30%] h-[500px] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">{isUpdate ? 'Update Room' : 'Create New Room'}</h1>
                    <form onSubmit={handleSubmit} className="w-[100%]">
                        <div className=" flex flex-col gap-y-3 pt-6 w-[70%] mx-auto">
                            <label className="font-medium text-black font-serif" htmlFor="">Name</label>
                            <input value={roomName} onChange={handleChange} type="text" name="roomName"
                                   className={`py-2 px-3  placeholder:text-gray-200 border border-1 border-gray-900 rounded w-[100%]  font-serif font-medium placeholder:px-4`}/>
                            <label className="font-medium text-black font-serif" htmlFor="">Seat Number</label>
                            <input value={roomSeats} onChange={handleChange} type="number" name="roomSeats"
                                   className={`py-2 px-3  placeholder:text-gray-200 border border-1 border-gray-900 rounded w-[100%]  font-serif font-medium placeholder:px-4`}/>
                            <label className="font-medium text-black font-serif" htmlFor="">Type</label>
                            <input value={roomCapacity} onChange={handleChange} type="text" name="roomCapacity"
                                   className={`py-2 px-3  placeholder:text-gray-200 border border-1 border-gray-900 rounded w-[100%]  font-serif font-medium placeholder:px-4`}/>
                        </div>
                        <div className="flex justify-center items-center gap-3 py-7">
                        <button
                                className="text-black bg-amber-500 hover:bg-amber-400 duration-300 font-serif font-medium px-10 py-2 rounded">{isUpdate ? "Update" : "Create"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RoomForm;