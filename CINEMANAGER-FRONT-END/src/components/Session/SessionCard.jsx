import React from 'react';

function SessionCard({img, title, hall, startTime}) {
    return (


        <div
            className="max-w-sm w-[350px] bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img  className="rounded-t-lg w-full h-[300px]" src={img} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-serif">{title}</h5>
                </a>
                <div className="flex justify-start gap-2">
                    <p className="mb-3 font-normal text-black bg-white rounded-md py-2 px-2 font-serif font-medium shadow shadow-gray-400">{hall}</p>
                    <p className="mb-3 font-normal text-black bg-white rounded-md py-2 px-2 font-serif font-medium shadow shadow-gray-400">{startTime}</p>
                </div>
                <div className="flex justify-end gap-2">
                    <div
                         className="bg-red-300 py-3 px-3 rounded cursor-pointer hover:bg-red-500 duration-300 group">
                        <svg className="w-6 h-6 dark:text-red-800 group-hover:text-red-100 duration-300"
                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                             viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SessionCard;