import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useFavorite from "../Hooks/Favorite/useFavorite.js";

function FavorieCard({className, img, title, category, created, movieId}) {

    const { addFavorite, deleteFavorite } = useFavorite();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = async () => {
        if (isFavorite) {
            await deleteFavorite(movieId);
            setIsFavorite(false);
        } else {
            await addFavorite(movieId);
            setIsFavorite(true);
        }
    };

    return (

            <div className={`card relative py-2 w-[20%] ${className}`}>
                <div className="cursor-pointer flex justify-center  duration-700">
                    <img className="w-[300px] border border-amber-400 rounded-lg h-[350px]" src={img} alt=""/>
                </div>
                <div className="bg-white shadow-lg w-[87%] mx-auto mt-[-20px] relative">
                    <div className="px-8 py-6">
                        <h1 className="text-lg text-black font-bold font-mono">{title}</h1>
                        <div className="py-2 flex gap-3">
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-amber-500" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg>
                                <p className="text-xs text-gray-500">{category}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-amber-500" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <p className="text-xs text-gray-500">{created}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-1">
                            <Link to={`/movieDetails/${movieId}`} >
                                <button
                                    className="text-white bg-amber-500 text-sm px-3 py-2 hover:text-white hover:bg-orange-500 duration-500 font-medium rounded">Détails
                                </button>
                            </Link>
                            <button
                                onClick={handleToggleFavorite}
                                className={`bg-black group text-sm px-3 py-1 hover:text-black hover:bg-white border border-white hover:border hover:border-black duration-500 font-medium rounded`}
                            >
                                {isFavorite ? (
                                    <svg
                                        className="w-6 h-6 text-amber-400  group-hover:text-text-white duration-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6 text-white group-hover:text-amber-400 duration-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default FavorieCard;