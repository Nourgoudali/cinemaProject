import React, {useState} from 'react';
import logo from "../../assets/logo.png";
import {Link, useNavigate} from "react-router-dom";
function SidBar() {
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const handleClick = (item) => {
        setActiveItem(item);
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    }
    return (
           <div className="bg-white  border-r border-gray-200 w-[17%] h-screen ">
            <img className="h-[140px]" src={logo} alt=""/>
            <div className=" relative px-4 py-10 h-[823px]">
                <ul className="">
                    <Link to="/admin/Dashboard" onClick={() => handleClick('dashboard')}
                         className={`group flex justify-start items-center gap-4 cursor-pointer hover:bg-gray-100 duration-100 py-3 px-2 rounded font-serif ${activeItem === 'dashboard' ? 'bg-gray-100' : ''}`}>
                        <svg
                            className={` group-hover:text-amber-500 duration-100  w-8 h-8 text-gray-800 cursor-pointer ${activeItem === 'dashboard' ? 'text-amber-500' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                        </svg>
                        <li className={`group-hover:text-amber-500 duration-100 cursor-pointer text-lg ${activeItem === 'dashboard' ? 'text-amber-500' : ''}`}>Dashboard</li>
                    </Link>

                    <Link to="/admin/movies" onClick={() => handleClick('movies')}
                         className={`flex justify-start items-center gap-4 group cursor-pointer hover:bg-gray-100 duration-100  py-3 px-2 rounded mt-2 ${activeItem === 'movies' ? 'bg-gray-100' : ''}`}>
                        <svg
                            className={`w-8 h-8 text-gray-800  group-hover:text-amber-500 duration-100 cursor-pointer ${activeItem === 'movies' ? 'text-amber-500' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"/>
                        </svg>
                        <li className={`group-hover:text-amber-500 duration-100 cursor-pointer font-medium font-serif text-lg ${activeItem === 'movies' ? 'text-amber-500' : ''}`}>Movies</li>
                    </Link>

                    <Link to="/admin/rooms" onClick={() => handleClick('rooms')}
                         className={`flex justify-start items-center gap-4  group cursor-pointer hover:bg-gray-100 duration-100 py-3 px-2 rounded mt-2 ${activeItem === 'rooms' ? 'bg-gray-100' : ''}`}>
                        <svg
                            className={`w-8 h-8 text-gray-800  group-hover:text-amber-500 duration-100 cursor-pointer ${activeItem === 'rooms' ? 'text-amber-500' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                        </svg>
                        <li className={`group-hover:text-amber-500 duration-100 cursor-pointer font-medium font-serif text-lg ${activeItem === 'rooms' ? 'text-amber-500' : ''}`}>Rooms</li>
                    </Link>

                    <Link to="/admin/sessions" onClick={() => handleClick('session')}
                         className={`flex justify-start items-center gap-4  group cursor-pointer hover:bg-gray-100 duration-100 py-3 px-2 rounded mt-2 ${activeItem === 'session' ? 'bg-gray-100' : ''}`}>
                        <svg
                            className={`w-8 h-8 text-gray-800  group-hover:text-amber-500 duration-100 cursor-pointer ${activeItem === 'session' ? 'text-amber-500' : ''} `}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
                        </svg>
                        <li className={`group-hover:text-amber-500 duration-100 cursor-pointer font-medium font-serif text-lg ${activeItem === 'session' ? 'text-amber-500' : ''}`}>Sessions</li>
                    </Link>

                    <Link to="/admin/addCategory" onClick={() => handleClick('category')}
                         className={`flex justify-start items-center gap-4  group cursor-pointer hover:bg-gray-100 duration-100 py-3 px-2 rounded mt-2 ${activeItem === 'category' ? 'bg-gray-100' : ''}`}>
                        <svg
                            className={`w-8 h-8 text-gray-800  group-hover:text-amber-500 duration-100 cursor-pointer ${activeItem === 'category' ? 'text-amber-500' : ''} `}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                        </svg>
                        <li className={`group-hover:text-amber-500 duration-100 cursor-pointer font-medium font-serif text-lg ${activeItem === 'category' ? 'text-amber-500' : ''}`}>Categories</li>
                    </Link>

                    <div onClick={handleLogout}
                        className="absolute bottom-10 w-[82%] flex justify-start items-center gap-4  group cursor-pointer hover:bg-gray-100 duration-100 py-3 px-2 rounded mt-2">
                        <svg className="w-8 h-8 text-gray-800 group-hover:text-red-500 duration-100 cursor-pointer"
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                        </svg>

                        <button 
                            className=" group-hover:text-red-500 duration-100 cursor-pointer font-medium font-serif text-lg">Sign
                            Out
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default SidBar;