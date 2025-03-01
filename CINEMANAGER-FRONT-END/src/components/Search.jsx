import React from 'react';
import useGetAllCategories from "../Hooks/Categories/getAllCategories.js";
import useSearchMovie from "../Hooks/Movie/useSearchMovie.js";
import {useState} from "react";
import MoviesCard from "./Movie/moviesCard.jsx";

function Search() {
    const {categories} = useGetAllCategories();

    const { movies, loading, error, searchMovies } = useSearchMovie();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTitle(value);
        searchMovies(value, selectedCategory);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
        searchMovies(searchTitle, category);
    };


    return (
        <form  className="w-[70%] overflow-hidden scrollbar-hide max-h-[550px] overflow-y-auto mx-auto border-2 border-amber-400 rounded-lg">
            <div className="flex">

                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-11 text-sm  text-center text-white font-bold rounded font-serif text-md bg-black " type="button">
                    {selectedCategory || 'All categories'}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>


                {isDropdownOpen && (
                    <div id="dropdown" className="z-10 absolute -ml-1 mt-[52px] font-serif font-bold divide-y divide-gray-100 border-amber-400 border-2 shadow w-48 bg-black">
                        <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            {categories.map((category) => (
                                <li key={category._id}>
                                    <button type="button" className="inline-flex w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleCategorySelect(category.name)}>
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                <div className="relative w-full">
                    <input type="search" className="block p-2.5 w-full py-4 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 " placeholder="The Night Agent ..." value={searchTitle} onChange={handleSearch}/>
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-amber-400 rounded-e-lg  hover:bg-amber-500 duration-300 px-4">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {movies.length > 0 && (
                <div className="flex flex-wrap justify-center px-5 items-center gap-3 ">
                    {movies.map((movie) => {
                        return <MoviesCard className="w-[30%]" key={movie._id} img={movie.picture}
                                           title={movie.title.length > 10 ? `${movie.title.slice(0, 10)}...` : movie.title}
                                           category={movie.categories.length > 0 ? movie.categories[0].name : 'No Category'}
                                           movieId={movie._id}/>
                    })}
                </div>
            )}

        </form>
    );
}

export default Search;