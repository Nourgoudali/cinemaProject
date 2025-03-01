import React from 'react';
import NavBar from "../../components/NavBar.jsx";
import backgroundImg from "../../assets/avatar.png";
import LatestCard from "../../components/LatestCard.jsx";
import MovieCard from "../../components/MovieCard.jsx";
import MoviesCard from "../../components/Movie/moviesCard.jsx";
import Footer from "../../components/Footer.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import getSession from "../../Hooks/Session/GetSession.js";
import useLatestSession from "../../Hooks/Session/useLatestSession.js";
import useGetAllMovies from "../../Hooks/Movie/getAllMovies.js";
import img1 from "../../assets/manifest.png";
import img2 from "../../assets/fubar.png";
import img3 from "../../assets/flash.png";
import img4 from "../../assets/silo.png";
import Search from "../../components/Search.jsx";

function Home() {

    const { sessions } = getSession();
    const { movies } = useGetAllMovies();
    const { latestSessions,  movieTime } = useLatestSession();



    return (
        <>
            <NavBar/>
            <div className="relative h-[860px] w-full bg-cover bg-center" style={{backgroundImage: `url(${backgroundImg}`}}>

                <div className=" flex flex-col justify-center h-full pt-[300px]">
                    <div className="flex justify-center items-center gap-10">
                        <div
                            className="flex gap-3 px-12 py-5 cursor-pointer rounded bg-amber-300 font-sans text-black font-medium hover:bg-amber-400 duration-300">
                            <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <button>Watch Trailer</button>
                        </div>
                        <div
                            className="flex gap-3 px-12 py-5 cursor-pointer rounded text-black bg-white font-sans font-medium hover:bg-gray-100 duration-300">
                            <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1 1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z"/>
                            </svg>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="w-[65%] mx-auto pt-8">
                        <h1 className="text-white font-bold font-sans text-5xl">Avatar: The Way of Water</h1>
                        <div className="flex gap-8 px-6 py-5">
                            <div className="flex gap-3 bg-white text-black px-5 py-2 rounded-xl font-bold font-serif">
                                <svg className="w-6 h-6 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p>10/2024</p>
                            </div>
                            <div className="flex gap-3 bg-white text-black px-5 py-2 rounded-xl font-bold font-serif">
                                <svg className="w-6 h-6 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p>3:12:00</p>
                            </div>
                        </div>
                        <p className="text-white font-mono font-medium text-lg w-[800px]"> Set more than a decade after the events of the first film, learn the story of the
                            Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths
                            they go
                            to keep each other safe, the battles they fight to stay alive, and the tragedies they
                            endure.</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 pt-8">
                        <div className="bg-amber-300 px-5 py-2 rounded-lg"></div>
                        <div className="bg-white rounded-full px-2 py-2"></div>
                        <div className="bg-white rounded-full px-2 py-2"></div>
                        <div className="bg-white rounded-full px-2 py-2"></div>
                        <div className="bg-white rounded-full px-2 py-2"></div>
                    </div>
                </div>

            </div>

            <div className="w-[65%] mx-auto pt-24">

                <Search />

                <h1 className="text-white font-bold font-serif text-2xl py-10">Recently Updated</h1>
                <div className="flex justify-center items-center gap-8 py-8">

                    <div className="flex gap-4 justify-center items-center w-[30%] h-[110px] ">
                        <img className="w-[28%] h-[100%]" src={img1} alt=""/>
                        <div>
                            <h1 className='text-white font-medium font-serif text-md'>Manifest</h1>
                            <p className="text-white">Movie / Room : 8</p>
                            <p className="text-white">11/05/23</p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center items-center w-[30%] h-[110px] ">
                        <img className="w-[28%] h-[100%]" src={img2} alt=""/>
                        <div>
                            <h1 className='text-white font-medium font-serif text-md'>Fubar</h1>
                            <p className="text-white">Movie / Room : 8</p>
                            <p className="text-white">11/05/23</p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center items-center w-[30%] h-[110px] ">
                        <img className="w-[28%] h-[100%]" src={img3} alt=""/>
                        <div>
                            <h1 className='text-white font-medium font-serif text-md'>The Flash</h1>
                            <p className="text-white">Movie / Room : 8</p>
                            <p className="text-white">11/05/23</p>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center items-center w-[30%] h-[110px] ">
                        <img className="w-[28%] h-[100%]" src={img4} alt=""/>
                        <div>
                            <h1 className='text-white font-medium font-serif text-md'>Silo</h1>
                            <p className="text-white">Movie / Room : 8</p>
                            <p className="text-white">11/05/23</p>
                        </div>
                    </div>

                </div>

                <SectionTitle title="Latest Movies"/>

                <div className="flex justify-center items-center gap-8 py-2">
                    {latestSessions && latestSessions.map((session) => (
                        <LatestCard key={session._id} imgSrc={session.movieId.picture}
                                    title={session.movieId.title.length > 10 ? `${session.movieId.title.slice(0, 10)}...` : session.movieId.title}
                                    time={movieTime(session.startTime, session.endTime)} price={session.price}
                                    sessionId={session._id}/>
                    ))}
                </div>

                <SectionTitle className="pt-24" title="Available Session - Movies"/>

                <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                    {sessions.map((session) => (
                        <MovieCard key={session._id} img={session.movieId.picture}
                                   title={session.movieId.title.length > 10 ? `${session.movieId.title.slice(0, 10)}...` : session.movieId.title}
                                   sessionId={session._id}/>
                    ))}

                </div>

                <SectionTitle className="pt-24" title="All - Movies"/>

                <div className="flex flex-wrap justify-center items-center gap-3 py-2">
                    {movies.map((movie) => {
                        return <MoviesCard className="w-[23%]" key={movie._id} img={movie.picture}
                                           title={movie.title.length > 10 ? `${movie.title.slice(0, 10)}...` : movie.title}
                                           category={movie.categories.length > 0 ? movie.categories[0].name : 'No Category'}
                                           movieId={movie._id}/>
                    })}
                </div>

                <Footer/>

            </div>
        </>
    );
}

export default Home;