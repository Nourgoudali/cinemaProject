import React, {useState, useEffect} from 'react';
import NavBar from "../../components/NavBar.jsx";
import LatestCard from "../../components/LatestCard.jsx";
import GetMyReservations from "../../Hooks/Reservations/GetMyReservations.js";
import DeleteReservation from "../../Hooks/Reservations/DeleteReservation.js";

function MyReservation() {
    const { reservations, error, time } = GetMyReservations();
    const [deleteReservations, setDeleteReservations] = useState([]);
    const { deleteReservation, error: deleteError, showErrorMessage, showSuccessMessage, success } = DeleteReservation();
    const [message, setMessage] = useState("");

    useEffect(() => {
        setDeleteReservations(reservations);
    }, [reservations]);

    const handleDeleteReservation = async (reservationId) => {
        const result = await deleteReservation(reservationId);
        if (result.success) {
            setDeleteReservations(deleteReservations.filter(reservation => reservation._id !== reservationId));
            setMessage(result.message);
        } else {
            setMessage(result.message);
        }
    };



    return (
        <>
            <NavBar />
            <div className="w-[65%] h-full m-auto py-14">
                {showSuccessMessage && <div className="text-green-800 bg-green-300 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-green-400/60">{success}</div>}
                {showErrorMessage && <div className="text-red-800 bg-red-300 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-red-400/60">{deleteError}</div>}


                <h1 className="text-white font-bold font-serif text-4xl py-5">My Reservation</h1>
                {error ? (
                    <div className="text-red-500 font-bold text-5xl py-44 font-mono text-center flex justify-center items-center flex-col">
                        <svg className="w-16 h-16 text-red-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>

                        <h1 className="py-8">{error}</h1>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center gap-5">
                        {deleteReservations.length > 0 ? (
                            deleteReservations.map((reservation) => (
                                <LatestCard
                                    key={reservation._id}
                                    imgSrc={reservation.sessionId.movieId.picture}
                                    time={time(reservation.sessionId.startTime)}
                                    title={reservation.sessionId.movieId.title}
                                    price={reservation.sessionId.price}
                                    showButtons={false}
                                    showDeleteButton={true}
                                    onDelete={() => handleDeleteReservation(reservation._id)}
                                />
                            ))
                    ) : (
                            <div className="text-white font-bold text-5xl py-44 font-mono text-center flex justify-center items-center flex-col w-full">
                                <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 .087.586l2.977-7.937A1 1 0 0 1 6 10h12V9a2 2 0 0 0-2-2h-4.532l-1.9-2.28A2 2 0 0 0 8.032 4H4Zm2.693 8H6.5l-3 8H18l3-8H6.693Z"
                                          clip-rule="evenodd"/>
                                </svg>

                                <h1 className="text-center py-5">No Reservations Found.</h1>
                            </div>
                        )}

                    </div>
                )}
            </div>
        </>
    );
}

export default MyReservation;