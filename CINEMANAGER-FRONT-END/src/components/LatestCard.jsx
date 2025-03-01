import {Link} from "react-router-dom";
function LatestCard({imgSrc, time, price, sessionId, title, showButtons = true, showDeleteButton = false, onDelete}) {
    return (
        <div className="w-[32%] h-[340px]">
            <div className="relative w-full h-full bg-cover bg-center rounded-xl"
                 style={{backgroundImage: `url(${imgSrc})`}}>
                <div className="px-4 py-4 flex justify-center justify-between items-center">
                    <div className="flex justify-center bg-white px-3 rounded-xl py-1 items-center gap-1">
                        <svg className="w-5 h-5 text-black" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                             viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <p className="text-black font-bold font-serif text-md">{time}</p>
                    </div>
                    <div className="flex justify-center bg-white px-3 rounded-xl py-1 items-center gap-1">
                        <svg className="w-5 h-5 text-black" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                             viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                        </svg>
                        <p className="text-black font-bold font-serif text-md">{price}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center h-56">
                    <svg className="w-12 h-12 rounded-full bg-white " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center justify-between items-center py-3">
                <h1 className="text-white font-serif font-bold text-3xl">{title}</h1>

                {showButtons && (
                    <div className="flex justify-center items-center gap-3">
                        <Link to={`/sessionDetails/${sessionId}`}>
                            <button className="px-3 py-2 rounded text-black bg-amber-300 hover:bg-amber-400 duration-300 font-sans font-medium">
                                Détails
                            </button>
                        </Link>

                        <button className=" group hover:bg-white flex items-center justify-center p-2 rounded bg-amber-300 hover:bg-amber-400 duration-300">
                            <svg
                                className="w-6 h-6 text-white  group-hover:text-amber-400 duration-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                            </svg>
                        </button>
                    </div>
                )}

                {showDeleteButton && (
                    <button
                        onClick={onDelete}
                        className="px-3 py-2 rounded text-white bg-red-500 hover:bg-red-600 duration-300 font-sans font-medium"
                    >
                        Delete
                    </button>
                )}




                    </div>
                    </div>

                    );
                }

export default LatestCard;