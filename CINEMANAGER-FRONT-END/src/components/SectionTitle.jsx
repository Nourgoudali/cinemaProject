import React from 'react';

function SectionTitle({title, className}) {
    return (
        <div className={`flex justify-center justify-between items-center ${className}`}>
            <h1 className="text-white font-bold font-serif text-2xl py-10">{title}</h1>
            <div className="flex justify-center items-center gap-2 cursor-pointer ">
                <h1 className="text-gray-300 font-medium font-serif text-2xl hover:text-amber-300 duration-300">View
                    All</h1>
                <svg className="w-6 h-6 text-amber-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                          d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    );
}

export default SectionTitle;