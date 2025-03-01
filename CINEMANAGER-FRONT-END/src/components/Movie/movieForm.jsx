import React from 'react';
import useGetAllCategories from "../../Hooks/Categories/getAllCategories.js";
import useAddMovie from "../../Hooks/Movie/addMovie.js";

function MovieForm({removeForm}) {
    const {formData, handleSubmit, handleChange} = useAddMovie();
    const {categories} = useGetAllCategories();

    const handleFormClick = (event) => {
        event.stopPropagation();
    };

    const handleCategoryChange = (e) => {
        const selectedCategories = Array.from(e.target.selectedOptions).map(option => option.value);
        formData.categories = selectedCategories;
    }

    return (
        <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={removeForm} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={handleFormClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[50%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Create New Movie</h1>
                    <form onSubmit={handleSubmit} className="w-[100%]">
                        <div className=" flex justify-center items-center gap-2 pt-8 ">

                            <input type="text" name="title" placeholder="Name" onChange={handleChange} value={formData.title} className={`py-2 px-2 w-[40%]  placeholder:text-gray-600 border border-1 border-gray-900 rounded font-serif font-medium placeholder:px-4`}/>
                            <select name="categories" multiple onChange={handleCategoryChange} className=" h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium">
                                <option value="">Select category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className=" flex justify-center items-center gap-2 py-4 ">
                            <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif" htmlFor="file_input">Upload Image</label>
                                <input onChange={handleChange}  name="poster" className="block w-full text-md py-2 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400" type="file"/>
                            </div>
                            <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif" htmlFor="file_input">Upload Video</label>
                                <input onChange={handleChange} name="trailer" className="block w-full text-md py-2 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400" type="file"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 py-1">
                            <textarea onChange={handleChange} value={formData.description} name="description" rows="4"
                                      className="block w-[80%] font-serif text-sm text-gray-900  rounded border border-gray-900  dark:placeholder-gray-600 placeholder:font-serif placeholder:text-lg px-3 py-2"
                                      placeholder="Write your description here..."></textarea>
                        </div>

                        <div className="flex justify-center items-center gap-3 py-7">
                            <button
                                className="text-black bg-amber-500 hover:bg-amber-400 duration-300 font-serif font-medium px-10 py-2 rounded">Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MovieForm;