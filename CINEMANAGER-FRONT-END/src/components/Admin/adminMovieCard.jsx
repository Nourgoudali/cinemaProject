import React from 'react';
import useDeleteMovie from "../../Hooks/Movie/deleteMovie.js";

function AdminMovieCard({img, title, movieId}) {
    const { deleteMovie } = useDeleteMovie();
    const handleDelete = () => {
            deleteMovie(movieId)
    }
    return (
        <div className="border-2 border-white shadow shadow-2xl shadow-gray-400 rounded-xl w-[18%]">
            <img src={img} className="w-full h-[300px]" alt=""/>
            <div className="flex justify-between items-center center px-5 py-4">
                <div>
                    <h1 className="text-black font-serif font-bold text-2xl px-3">{title}</h1>
                </div>
                <div onClick={handleDelete} className="bg-red-300 py-3 px-3 rounded cursor-pointer hover:bg-red-500 duration-300 group">
                    <svg className="w-6 h-6 dark:text-red-800 group-hover:text-red-100 duration-300" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </div>
            </div>
        </div>);
}

export default AdminMovieCard;