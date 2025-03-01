import React from 'react';
import NavBar from "../../components/NavBar.jsx";
import FavorieCard from "../../components/FavorieCard.jsx";
import useGetFavoris from "../../Hooks/Favorite/useGetFavoris.js";

function Favorie() {
    const {favorites} = useGetFavoris();
    return (
        <div>
            <NavBar/>
                <div className="w-[65%] h-full m-auto py-8">
                    <h1 className="text-white font-bold font-serif text-4xl py-5">My Favoris</h1>

                    <div className="flex flex-wrap gap-6 items-center">
                        {favorites.map((favorie) => {
                             return <FavorieCard key={favorie._id} title={favorie.movie.title} movieId={favorie.movie._id} img={favorie.movie.picture}  />
                        })}
                    </div>

                </div>
            </div>
            );
            }

            export default Favorie;