import React, {useState} from "react";
import {format} from "date-fns";
import {Link, useLocation, useNavigate, useNavigation} from "react-router-dom";
import ReserveSeat from "../../Hooks/Reservations/ReserveSeat.js";
import { toast } from "react-toastify";

function Reservation() {
    const {handleReserveSeat, error} = ReserveSeat();
    const location = useLocation();
    const navigate = useNavigate();
    const { session } = location.state || {};
    const [selectedSeat, setSelectedSeat] = useState(null);

    const handleSeatClick = (seatNumber) => {
        const seat = session.seats.find(seat => seat.seatNumber === seatNumber);
        if(seat && !seat.isReserved) {
            setSelectedSeat(seatNumber);
        }
    };

    const handleBookClick = () => {
        if(session && session._id && selectedSeat) {
            handleReserveSeat(session._id, selectedSeat);
        }
        toast.success('RESERVATION SUCCESS');
        navigate('/myReservation');
    }

    return (
        <>
            <div className="flex justify-center items-center w-full h-full py-32">
                <div className="bg-gradient-to-r from-black border-2 border-gray-900  to-black rounded-lg shadow-amber-300/60 shadow-2xl  w-[1400px] h-[700px]">
                    <div className="flex justify-center justify-between items-center h-full px-16">
                        <img className="w-[30%] h-[80%] rounded shadow-2xl shadow-amber-300/60" src={session.movieId.picture} alt=""/>
                        <div className="h-[80%] w-[1px] bg-gray-600"></div>
                        <div className="w-[60%] h-[80%]">
                            <h1 className="text-white font-bold font-serif text-6xl text-center">{session.movieId.title}</h1>
                            <div className="w-[70%] h-[1px] bg-gray-600 mx-auto mt-4"></div>
                            <div className="flex justify-center items-center py-10 gap-3">
                                <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                    <svg className="w-5 h-5 text-black" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <p className="text-black font-medium font-sans">
                                        {session.startTime ? format(new Date(session.startTime), 'yyyy-MM-dd') : ''}
                                    </p>
                                </div>
                                <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                    <svg className="w-5 h-5 text-black" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <p className="text-black font-medium font-sans">{session.startTime ? format(new Date(session.startTime), 'HH:MM ') : ''}</p>
                                </div>
                                <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                    <svg className="w-5 h-5 text-black" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                                    </svg>
                                    <p className="text-black font-medium font-sans">{session.price}</p>
                                </div>
                            </div>

                            <div className="w-[70%] h-[1px] bg-amber-600 shadow-2xl shadow-amber-500 mx-auto "></div>

                            <div className="flex flex-wrap justify-center items-center gap-2 pt-8">
                                {session.seats.map((seat) => {
                                    const isSelected = selectedSeat === seat.seatNumber;
                                    const isReserved = seat.isReserved;
                                    return (
                                        <div
                                            key={seat.seatNumber}
                                            className={`group flex justify-center h-[38px] w-[40px] relative ${isReserved ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                            onClick={() => !isReserved && handleSeatClick(seat.seatNumber)}
                                        >
                                            <div
                                                className={`w-[9px] rounded h-[21px] left-1 border border-white absolute bottom-0 group-hover:bg-amber-500 duration-300 ${isReserved ? 'bg-gray-400' : isSelected ? 'bg-amber-500' : 'bg-green-700'} duration-300`}></div>
                                            <div
                                                className={`h-full w-[70%] text-center text-black font-medium rounded group-hover:bg-amber-300 duration-300 ${isReserved ? 'bg-gray-400 text-gray-600' : isSelected ? 'bg-amber-300' : 'bg-green-400'}`}>{seat.seatNumber}</div>
                                            <div
                                                className={`w-[9px] rounded h-[21px] right-1 border border-white absolute bottom-0 group-hover:bg-amber-500 duration-300 ${isReserved ? 'bg-gray-400' : isSelected ? 'bg-amber-500' : 'bg-green-700'} duration-300`}></div>
                                        </div>
                                    );
                                })}
                            </div>


                            <div className="flex justify-center items-center gap-5 pt-10">
                                <Link to="/home">
                                    <button
                                        className="bg-gray-300 text-black font-medium px-12 py-3 rounded-lg hover:bg-white duration-300">Cancel
                                    </button>
                                </Link>

                                <button onClick={handleBookClick}
                                        className="bg-amber-300 text-black font-medium px-12 py-3 rounded-lg hover:bg-amber-400 duration-300">Book
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reservation;