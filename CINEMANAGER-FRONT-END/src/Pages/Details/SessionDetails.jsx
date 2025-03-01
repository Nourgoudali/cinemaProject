import React, {useState} from 'react';
import NavBar from "../../components/NavBar.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import MovieCard from "../../components/MovieCard.jsx";
import Footer from "../../components/Footer.jsx";
import getSession from "../../Hooks/Session/GetSession.js";
import sessionDetails from "../../Hooks/Session/SessionDetails.js";
import {useNavigate, useParams} from "react-router-dom";
import CommentsCard from "../../components/CommentsCard.jsx";
import walid from "../../assets/Nour.jpg";
import Rating from "../../components/Rating.jsx";
import Video from "../../components/Video.jsx";
function SessionDetails() {

    //RATING
    const [showRatingCard, setShowRatingCard] = useState(false);
    const handleFinishVideo = () => {
        console.log("video has finished");
        setShowRatingCard(true);
    }

    //COMMENTS
    const [visible, setVisible] = useState(false);
    const showContent = () => {
        setVisible(!visible);
    }

    const {id} = useParams();
    const {session, error, movieTime} = sessionDetails({id});
    const {sessions} = getSession();
    const navigate = useNavigate();
    if (error) {
        return <div>Error fetching session: {error.message}</div>;
    }

    const handleBookNow = () => {
        navigate("/Reservation", {state: {session}});
    }


    return (
        <>
            <NavBar />
            <div className="w-[65%] mx-auto pt-14">
                {session ? (
                <>
                    <Video onVideoEnd={handleFinishVideo} src={session.movieId.trailer} />

                    <div className="flex  gap-10 pt-24">
                    <img className="h-[556px] w-[352px] rounded" src={session.movieId.picture} alt=""/>
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-bold font-serif text-4xl">{session.movieId.title}</h1>
                                <button onClick={handleBookNow}
                                        className="bg-amber-300 text-black font-medium px-12 py-3 rounded-lg hover:bg-amber-400 duration-300">Book
                                    Now
                                </button>
                        </div>
                        <div className="pt-10 flex items-center gap-2">

                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <p className="text-black font-medium font-sans">Science Fiction</p>
                            </div>

                            <div className=" px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                            <svg className="w-5 h-5 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className="text-white font-medium font-sans">{new Date(session.startTime).getFullYear()}</p>
                            </div>
                            <div className="px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="text-white font-medium font-sans">{movieTime(session.startTime, session.endTime)}</p>
                            </div>
                            <div className="px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className="text-white font-medium font-sans">{session.hallId.seats}</p>
                            </div>
                            <div className="px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                </svg>

                                <p className="text-white font-medium font-sans">8.5</p>
                            </div>
                        </div>
                        <p className="text-white font-medium font-serif text-lg pt-8">{session.movieId.description}</p>
                        <div className="pt-8">
                            <ul>
                                <li className="text-white font-medium font-serif text-lg">Start
                                    Date : {new Date(session.startTime).toLocaleTimeString('fr-FR', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }).replace(':', 'H')}</li>
                                <li className="text-white font-medium font-serif text-lg">End
                                    Date : {new Date(session.endTime).toLocaleTimeString('fr-FR', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }).replace(':', 'H')}
                                </li>
                                <li className="text-white font-medium font-serif text-lg ">Hall
                                    : {session.hallId.name}</li>
                                <li className="text-white font-medium font-serif text-lg">Price : {session.price}$</li>
                            </ul>
                        </div>
                            <Rating onClick={() => setShowRatingCard(false)}  className={showRatingCard ? '' : 'scale-0'}/>
                    </div>
                </div>
                </>
                ) : (
                    <div>Loading session details...</div>

                )}

                <div className="py-10 px-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/>
                        </svg>
                        <h1 className="text-white text-3xl font-medium font-serif">Comments</h1>
                    </div>

                    <svg onClick={showContent} className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer hover:text-amber-500 duration-300" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m9 5 7 7-7 7"/>
                    </svg>
                </div>

                <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${visible ? 'max-h-[800px] overflow-y-auto' : 'max-h-0'}`}>

                    <CommentsCard className="py-4" comment="I had a great experience using this platform! The interface is user-friendly, and the support team was very responsive. Highly recommended!" client="Walid Lhaila" img={walid} />

                </div>
                <SectionTitle title="You may also like"/>

                <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                    <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                        {sessions.map((session) => (
                            <MovieCard key={session._id} img={session.movieId.picture} title={session.movieId.title}
                                       sessionId={session._id}/>
                        ))}

                    </div>

                </div>

                <Footer/>

            </div>
        </>
    );

}

export default SessionDetails;