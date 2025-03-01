import React, {useState} from 'react';
import useGetAllRooms from "../../Hooks/Room/useGetAllRooms.js";
import useGetAllMovies from "../../Hooks/Movie/getAllMovies.js";
import useAddSession from "../../Hooks/Session/useAddSession.js";

function SessionForm({removeForm, setSessions}) {
    const {rooms} = useGetAllRooms();
    const {movies} = useGetAllMovies();
    const {addSession} = useAddSession();

    const [formData, setFormData] = useState({
        movie: '',
        room: '',
        startTime: '',
        endTime: '',
        price: '',
        availability: 'true',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]: value,}));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const sessionData = {
            movieId: formData.movie,
            hallId: formData.room,
            startTime: formData.startTime,
            endTime: formData.endTime,
            price: formData.price,
            availability: formData.availability === 'true',
        };

        await addSession(sessionData, removeForm, setSessions);
    };


    const handleFormClick = (event) => {
        event.stopPropagation();
    };
    return (
        <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={removeForm} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={handleFormClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[50%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Create New Session</h1>
                    <form className="w-[100%]" onSubmit={handleSubmit}>
                        <div className=" flex justify-center items-center gap-2 pt-8 ">

                            <select name="movie" value={formData.movie} onChange={handleChange} className=" h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium ">
                                <option  value="">Select Movie</option>
                                {movies.map((movie) => {
                                    return <option key={movie._id} value={movie._id}>{movie.title}</option>
                                })}
                            </select>
                            <select name="room" value={formData.room} onChange={handleChange}  className=" h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium">
                                <option value="">Select Room</option>
                                {rooms.map((room) => {
                                   return <option key={room._id} value={room._id}>{room.name}</option>
                                })}
                            </select>
                        </div>
                        <div className=" flex justify-center items-center gap-2 py-4 ">
                            <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Start Time</label>
                                <input name="startTime" value={formData.startTime} onChange={handleChange} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="datetime-local"/>
                            </div>
                            <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">End Time</label>
                                <input name="endTime" value={formData.endTime} onChange={handleChange} className="block font-serif w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="datetime-local"/>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 ">
                            <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Price</label>
                                <input placeholder="50$" name="price" value={formData.price} onChange={handleChange} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="number"/>
                            </div>
                            <div className="w-[40%]">
                                <h3 className="text-black font-serif mb-1">Availability</h3>
                                <ul className="items-center w-full h-[40px] gap-1  text-sm font-medium text-gray-900 bg-white  rounded-lg sm:flex dark:text-white">
                                    <li className="w-full border border-gray-600 rounded sm:border sm:border ">
                                        <div className="flex items-center ps-3">
                                            <input id="availability-yes" type="radio" value="true" name="availability" checked={formData.availability === 'true'} onChange={handleChange}
                                                   className="w-4 h-3 text-blue-600 bg-gray-100  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-700">Yes</label>
                                        </div>
                                    </li>
                                    <li className="w-full border border-gray-600 rounded sm:border  sm:border">
                                        <div className="flex items-center ps-3">
                                            <input id="availability-no" type="radio" value="false" name="availability" checked={formData.availability === 'false'} onChange={handleChange}
                                                   className="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label htmlFor="horizontal-list-radio-id"
                                                   className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-700">Non</label>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-3 py-7">
                            <button
                                className="text-black bg-amber-500 hover:bg-amber-400 duration-300 font-serif font-medium px-10 py-2 rounded">Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
}

export default SessionForm;