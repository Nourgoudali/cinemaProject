import React, {useState, useEffect} from 'react';
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import RoomForm from "../../components/Room/roomForm.jsx";
import RoomCard from "../../components/Room/roomCard.jsx";
import useGetAllRooms from "../../Hooks/Room/useGetAllRooms.js";

function Rooms() {
    const [showForm, setShowForm] = useState(false);
    const [currentRoom, setCurrentRoom] = useState(null);
    const {rooms, setRooms} = useGetAllRooms();

    const handleCloseForm = () => {
        setShowForm(false);
        setCurrentRoom(null); // Reset the currentRoom state when closing the form
    };

    const handleAddedRoom = (newRoom) => {
        setRooms((prevRooms) => [...prevRooms, newRoom]);
    }

    const handelDeleteRoom = (deletedId) => {
        setRooms((prevRooms)  => prevRooms.filter(room => room._id !== deletedId))
    }

    const handleUpdateRoom = (roomId) => {
        const roomToUpdate = rooms.find(room => room._id === roomId);
        setCurrentRoom(roomToUpdate);
        setShowForm(true);
    }





    return (
        <div className="flex bg-white">
            {showForm && (
                <RoomForm removeForm={handleCloseForm} onAddRoom={handleAddedRoom}  room={currentRoom} isUpdate={!!currentRoom}/>
            )}

            <SidBar/>
            <div className="w-full">
                <Header/>
                <div className="container h-[880px] w-full overflow-y-auto scrollbar-hide">
                    <div className="flex justify-between items-center px-10 py-8">
                        <h1 className="text-black font-serif font-bold text-3xl">Rooms</h1>
                        <div onClick={() => setShowForm(true)}
                             className="bg-amber-500 px-10 py-2 flex items-center gap-2 rounded hover:bg-amber-400 duration-300 cursor-pointer">
                            <svg className="w-6 h-6 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap necap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 12h14m-7 7V5"/>
                            </svg>
                            <button className="text-white  font-bold font-serif text-lg">Rooms</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 px-10 py-5">
                        {rooms.map((room) => (
                            <RoomCard key={room._id} name={room.name} roomId={room._id} onDelete={handelDeleteRoom} onUpdate={handleUpdateRoom}/>
                    ))}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Rooms;