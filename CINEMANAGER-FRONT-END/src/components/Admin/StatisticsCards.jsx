import React from 'react';

function StatisticsCards({title, number, svg}) {
    return (
        <div
            className="bg-gradient-to-r from-amber-400  shadow-xl shadow-gray-700/10 to-white  rounded-lg w-[24%] border-gray-300 border">
            <div className="p-4">
                <h1 className="text-black text-2xl font-bold font-serif">{title}</h1>
                <div className="flex justify-between mt-2 px-2">
                    <h1 id="user-count"
                        className="text-black font-medium text-3xl font-serif">{number}</h1>
                    <div>
                        {svg}
                    </div>
                </div>
            </div>
        </div>

)
    ;
}

export default StatisticsCards;