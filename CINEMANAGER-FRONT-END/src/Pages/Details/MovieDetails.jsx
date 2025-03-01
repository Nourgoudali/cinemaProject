import React, {useState} from 'react';
import NavBar from "../../components/NavBar.jsx";
import Video from "../../components/Video.jsx";
import Rating from "../../components/Rating.jsx";
import CommentsCard from "../../components/CommentsCard.jsx";
import CommentsInput from "../../components/CommentsInput.jsx";
import walid from "../../assets/Nour.jpg";
import SectionTitle from "../../components/SectionTitle.jsx";
import Footer from "../../components/Footer.jsx"
import {Link, useParams} from "react-router-dom";
import useGetMovieDetails from "../../Hooks/Movie/useGetMovieDetails.js";
import useGetAllMovies from "../../Hooks/Movie/getAllMovies.js";
import MoviesCard from "../../components/Movie/moviesCard.jsx";
import {useEffect} from "react";



function MovieDetails() {
    const { id } = useParams();
    const { movie, loading, error, fetchMovieDetails } = useGetMovieDetails(id);
    const [hasRated, setHasRated] = useState(false);



    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    useEffect(() => {
        if (movie) {
            const currentUser  = localStorage.getItem("userId");
            const userRating = movie.clientRatings.find(r => r.client.toString() === currentUser );
            if (userRating) {
                setHasRated(true);
            }
        }
    }, [movie]);

    const {movies} = useGetAllMovies();

    //RATING
    const [showRatingCard, setShowRatingCard] = useState(false);

    const handleFinishVideo = () => {
        console.log("video has finished");
        if (!hasRated) {
            setShowRatingCard(true);
        }
    }

    //COMMENTS
    const [visible, setVisible] = useState(false);
    const showContent = () => {
        setVisible(!visible);
    }

    const [editingComment, setEditingComment] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);

    const handleEditComment = (comment, commentId) => {
        setEditingComment(comment);
        setEditingCommentId(commentId);
    }

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div className="text-white">Error fetching movie details: {error}</div>;
    }

    // Handle case where movie is null
    if (!movie) {
        return <div className="text-white">Movie not found.</div>;
    }

    const currentUser = localStorage.getItem("userId")
    console.log(currentUser)


    return (
        <>
            <NavBar />
            <div className="w-[65%] mx-auto pt-14">
                {movie && (
                    <>
                        <Video key={movie.trailer} src={movie.trailer} onVideoEnd={handleFinishVideo}   />

                        <div id={'movieDetails'} className="flex  gap-10 pt-24">
                            <img className="h-[556px] w-[352px] rounded" src={movie.picture}  alt=""/>
                            <div className="pt-6">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-white font-bold font-serif text-4xl">{movie.title}</h1>
                                    <Link to="/home">
                                        <button
                                                className="bg-amber-300 text-black font-medium px-12 py-3 rounded-lg hover:bg-amber-400 duration-300">Back
                                        </button>
                                    </Link>
                                </div>
                                <div className="pt-10 flex items-center gap-2">

                                    <div className="flex gap-6 justify-center items-center">
                                        {movie.categories && movie.categories.length > 0 ? (
                                            movie.categories.map((category, index) => (
                                                <p key={index} className="text-black bg-white  px-6 py-2 rounded-md  font-medium font-sans">
                                                    {category.name}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="text-black font-medium font-sans">No Category</p>
                                        )}
                                    </div>
                                </div>
                                <div className="pt-8 flex items-center gap-2">
                                    <div className=" px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                        <svg className="w-8 h-8 text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <p className="text-white font-medium font-sans text-2xl">2023</p>
                                    </div>
                                    <div className="px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                        <svg className="w-8 h-8 text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                        <p className="text-white font-medium font-sans text-2xl">2H30</p>
                                    </div>

                                    <div className="px-3 py-2 rounded-md flex gap-2 justify-center items-center">
                                        <svg className="w-8 h-8 text-amber-300" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                        </svg>

                                        <p className="text-white font-medium text-2xl mt-1 font-sans">{movie.movieRating}</p>
                                    </div>
                                </div>
                                <p className="text-white font-medium font-serif text-lg pt-8">{movie.description}</p>

                                {showRatingCard && (
                                    <Rating
                                        movieId={id}
                                        userId={currentUser}
                                        onClose={() => setShowRatingCard(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </>
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

                    <svg onClick={showContent}
                         className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer hover:text-amber-500 duration-300"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m9 5 7 7-7 7"/>
                    </svg>
                </div>

                <div
                    className={`overflow-hidden scrollbar-hide transition-[max-height] duration-700 ease-in-out ${visible ? 'max-h-[800px] overflow-y-auto' : 'max-h-0'}`}>
                    {movie.comments && movie.comments.length > 0 ? (
                        movie.comments.map((comment, index) => (
                            <CommentsCard
                                key={index}
                                className="py-4"
                                comment={comment.comment}
                                client={comment.client.name}
                                img={walid}
                                movieId={movie._id}
                                commentId={comment._id}
                                fetchMovieDetails={fetchMovieDetails}
                                loggedUser={currentUser}
                                ownCommentId={comment.client._id}
                                onEditComment={() => handleEditComment(comment.comment, comment._id)}
                            />
                        ))
                    ) : (
                        <p className="text-white font-medium">No comments available.</p>
                    )}

                    <CommentsInput movieId={id} fetchMovieDetails={fetchMovieDetails} editingComment={editingComment} setEditingComment={setEditingComment} editingCommentId={editingCommentId} setEditingCommentId={setEditingCommentId}/>


                </div>
                <SectionTitle title="You may also like"/>

                <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                    <div className="flex flex-wrap justify-center items-center gap-5 py-2">
                        {movies.map((movie) => {
                            return <MoviesCard className={'w-[280px]'} key={movie._id} img={movie.picture}
                                               movieId={movie._id}
                                               category={movie.categories.length > 0 ? movie.categories[0].name : 'No Category'}
                                               title={movie.title.length > 10 ? `${movie.title.slice(0, 10)}...` : movie.title}/>
                        })}
                    </div>

                </div>

                <Footer/>

            </div>
        </>
    );
}

export default MovieDetails;