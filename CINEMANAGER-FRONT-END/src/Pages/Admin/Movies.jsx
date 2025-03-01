import React, {useState} from 'react';
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import MovieForm from "../../components/Movie/movieForm.jsx";
import MovieCard from "../../components/Admin/adminMovieCard.jsx";
import useGetAllMovies from "../../Hooks/Movie/getAllMovies.js";
function Movies() {

    const [showForm, setShowForm] = useState(false);
    const {movies, loading} = useGetAllMovies();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div className="flex bg-white">
            {showForm &&
                <MovieForm removeForm={() => setShowForm(false)}/>
            }

            <SidBar/>
            <div className="w-full">
                <Header/>
                <div className="container h-[880px] w-full overflow-y-auto scrollbar-hide">
                    <div className="flex justify-between items-center px-10 py-8">
                        <h1 className="text-black font-serif font-bold text-3xl">Movies</h1>
                        <div onClick={() => setShowForm(true)}
                             className="bg-amber-500 px-10 py-2 flex items-center gap-2 rounded hover:bg-amber-400 duration-300 cursor-pointer">
                            <svg className="w-6 h-6 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap necap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 12h14m-7 7V5"/>
                            </svg>
                            <button className="text-white  font-bold font-serif text-lg">Movies</button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 px-10 py-5">
                        {movies.map((movie) => (
                            <MovieCard key={movie._id} img={movie.picture} title={movie.title.length > 10 ? `${movie.title.slice(0, 10)}...` : movie.title} movieId={movie._id} />
                        ))}

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Movies;