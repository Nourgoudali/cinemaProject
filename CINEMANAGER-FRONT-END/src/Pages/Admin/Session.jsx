import React, {useState} from 'react';
import {format} from "date-fns";
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import SessionCard from "../../components/Session/SessionCard.jsx";
import SessionForm from "../../components/Session/SessionForm.jsx";
import useGetSessions from "../../Hooks/Session/GetSession.js";

function Session() {
    const [showForm, setShowForm] = useState(false);
    const {sessions, setSessions} = useGetSessions([]);


    return (
        <div className="flex bg-white">
            {showForm &&
                <SessionForm removeForm={() => setShowForm(false)} setSessions={setSessions} />
            }
            <SidBar/>
            <div className="w-full">
                <Header/>
                <div className="container h-[880px] w-full overflow-y-auto scrollbar-hide">
                    <div className="flex justify-between items-center px-10 py-8">
                        <h1 className="text-black font-serif font-bold text-3xl">Session</h1>
                        <div onClick={() => setShowForm(true)}
                             className="bg-amber-500 px-10 py-2 flex items-center gap-2 rounded hover:bg-amber-400 duration-300 cursor-pointer">
                            <svg className="w-6 h-6 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap necap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 12h14m-7 7V5"/>
                            </svg>
                            <button className="text-white  font-bold font-serif text-lg">Session</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap  items-center gap-3 px-12 py-5">
                        {sessions.map((session) => {
                           return  <SessionCard key={session._id} title={session.movieId.title} img={session.movieId.picture} hall={session.hallId.name} startTime={format(new Date(session.startTime), 'yyyy/MM/dd')}/>
                        })}
                    </div>
                </div>


            </div>
        </div>);
}

export default Session;