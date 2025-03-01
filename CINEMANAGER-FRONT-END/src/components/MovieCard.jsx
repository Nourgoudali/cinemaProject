import React from "react";
import {Link} from "react-router-dom";

function MovieCard({img, title, sessionId}) {
    return (
        <div
            className="relative cursor-pointer bg-cover bg-center w-[270px] h-[400px] group overflow-hidden border rounded border-amber-300 shadow-amber-300/30 shadow-2xl hover:shadow-gray-300/40 hover:shadow-2xl">
            <img src={img} alt={title}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-110"/>
            <div
                className="absolute inset-0 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-30 text-white flex items-end">
                <div
                    className="transform-gpu p-4 w-[230px] space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-500 ease-in-out">
                    <div className="w-full ml-[-16px]">
                        <div className="flex justify-end">
                            <Link to={`/sessionDetails/${sessionId}`}>
                                <button
                                    className="bg-amber-300 px-4 text-sm text-black hover:bg-white py-1 hover:text-black duration-500 mt-2">Détails
                                </button>
                            </Link>
                        </div>
                        <h1 className="bg-white w-full font-serif text-black py-1 text-center">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;