import React from 'react';
import Nour from "../../assets/Nour.jpg";

function Header() {
    const currentUser = localStorage.getItem('userName')

    return (
        <div className=' w-full h-[80px] bg-white border border-b border-gray-200'>
            <div className=" flex justify-between items-center h-[100%] w-[90%] mx-auto">
                <div className="flex justify-start items-center gap-2">
                    <svg className="w-6 h-6 text-gray-400 " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                         viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    <input className="py-3 px-2 w-96 focus:border-none focus:outline-none text-black font-serif"
                           type="text" placeholder="Search ..."/>
                </div>

                <div className="flex justify-center items-center gap-10 h-20">
                    <div className='h-[70%] w-[2px] bg-gray-200'></div>
                    
                    <div className='flex justify-center items-center gap-3'>
                        <h2 className="font-bold font-serif text-black text-md">{currentUser}</h2>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Header;