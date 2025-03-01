import React, {useEffect, useState} from 'react';
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import StatisticsCards from "../../components/Admin/StatisticsCards.jsx";
import getAllClients from "../../Hooks/Users/GetAllClients.js";
import useUsersCount from "../../Hooks/statistics/usersCount.js";
import useRoomsCount from "../../Hooks/statistics/roomsCount.js";
import useMovieCount from "../../Hooks/statistics/moviesCount.js";
import useCategoryCount from "../../Hooks/statistics/categoriesCount.js";
import useBanUser from "../../Hooks/Users/useBanUser.js";


function Dashboard() {
        const {clients: fetchedClients} = getAllClients();
        const {userCount} = useUsersCount();
        const {roomCount} = useRoomsCount();
        const {movieCount} = useMovieCount();
        const {banUser} = useBanUser();
        const {categoryCount} = useCategoryCount();
        const [clients, setClients] = useState([]);

    useEffect(() => {
        if (fetchedClients) {
            setClients(fetchedClients);
        }
    }, [fetchedClients]);


    const handleBanUser = async (userId) => {
        try {
            const updatedUser = await banUser(userId);
            setClients((prevClients) =>
                prevClients.map((client) =>
                    client._id === updatedUser.data._id
                        ? { ...client, banned: updatedUser.data.banned }
                        : client
                )
            );
        } catch (error) {
            console.error("Error banning/unbanning user", error);
        }
    };



    return (
            <>
                <div className="flex bg-white">
                    <SidBar />
                    <div className="w-full">
                        <Header/>
                        <div className="flex flex-wrap items-center justify-center gap-3 py-5">
                            <StatisticsCards title="Users" number={userCount} svg={<svg className="w-8 h-8 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>}/>
                            <StatisticsCards title="Movies" number={movieCount} svg={<svg className="w-8 h-8 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"/></svg>}/>
                            <StatisticsCards title="Rooms" number={roomCount} svg={<svg className="w-8 h-8 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/></svg>}/>
                            <StatisticsCards title="Categories" number={categoryCount} svg={<svg className="w-8 h-8 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>}/>
                        </div>

                        <div className="w-[98%] mx-auto h-[75%] border-2 border-dashed border-amber-400 ">
                            <table className="w-[98%] max-h-44 mx-auto mt-5">
                                <thead className="text-black text-sm bg-gradient-to-b from-amber-400 to-white">
                                <tr>
                                    <th className="py-3 border border-gray-300">ID</th>
                                    <th className="py-3 border border-gray-300">FULL NAME</th>
                                    <th className="py-3 border border-gray-300">ADRESS EMAIL</th>
                                    <th className="py-3 border border-gray-300">PHONE</th>
                                    <th className="py-3 border border-gray-300">TIME SPENT ON PAGE</th>
                                    <th className="py-3 border border-gray-300">ACTION</th>
                                </tr>
                                </thead>
                                    <tbody className="text-white text-md text-center">
                                    {clients.map((client) => (
                                        <tr key={client._id}>
                                            <td className="py-2 font-medium font-serif border border-gray-300 text-black">{client._id}</td>
                                            <td className="py-2 font-medium font-serif border border-gray-300 text-black">{client.name}</td>
                                            <td className="py-2 font-medium font-serif border border-gray-300 text-black">{client.email}</td>
                                            <td className="py-2 font-medium font-serif border border-gray-300 text-black">{client.phone ? client.phone : "Aucun"}</td>
                                            <td className="py-2 font-medium font-serif border border-gray-300 text-black">{client.email}</td>
                                            <td className="flex justify-center items-center gap-2 py-1 font-medium font-serif border border-gray-300">
                                                {client.banned ? (
                                                    <div id="unban" onClick={() => handleBanUser(client._id)}
                                                         className="bg-blue-400 py-1 rounded px-2 cursor-pointer hover:bg-blue-500 duration-300 group">
                                                        <svg className="w-7 h-7 text-blue-700 group-hover:text-white duration-300" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                             viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div id="ban" onClick={() => handleBanUser(client._id)}
                                                         className="bg-red-400 py-1 rounded px-2 cursor-pointer hover:bg-red-500 duration-300 group">
                                                        <svg className="w-7 h-7 text-red-700 group-hover:text-white duration-300" aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                             viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                                  d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </div>
                                                )}

                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </>
    );
}

export default Dashboard;