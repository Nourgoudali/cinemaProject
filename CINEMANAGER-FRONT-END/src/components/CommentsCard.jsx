import React, {useState} from 'react';
import useDeleteComment from "../Hooks/Comment/useDeleteComment.js";


function CommentsCard({img, client, comment, className, movieId, commentId, fetchMovieDetails, loggedUser, ownCommentId, onEditComment}) {


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibilty = () => setIsVisible(!isVisible);

    const {deleteComment} = useDeleteComment(movieId, commentId);

    const handleDelete = async () => {
        await deleteComment();
        fetchMovieDetails();
    };

    const isUserComment = loggedUser === ownCommentId;


    return (
        <div className={` relative flex justify-between items-center w-full ${className}`}>

            <div className="flex  gap-3 w-[99%]">
                <img className="h-16 w-16 rounded-full" src={img} alt=""/>
                <div className="w-[90%]">
                    <p className="text-white font-medium font-serif text-xl py-1">{client}</p>
                    <p className="text-gray-300 font-sans text-sm">{comment}</p>
                </div>
            </div>

            <div onClick={toggleVisibilty} className="hover:bg-gray-800 py-2 rounded-lg cursor-pointer duration-200">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                          d="M12 6h.01M12 12h.01M12 18h.01"/>
                </svg>
            </div>

            {isVisible && isUserComment && (
            <div id="btns" className="bg-black border-white rounded-md border flex justify-center gap-3 w-28 h-14 absolute right-8">
                    <>
                        <button onClick={() => onEditComment()} className="bg-blue-200 px-2 h-[45px] mt-1 rounded group hover:bg-blue-600 duration-200">
                            <svg className="w-6 h-6 text-gray-800 dark:text-blue-500 group-hover:text-white duration-200" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                            </svg>
                        </button>
                        <button onClick={handleDelete}  className="bg-red-200 px-2 h-[45px] mt-1 rounded group hover:bg-red-600 duration-200">
                            <svg className="w-6 h-6 text-gray-800 dark:text-red-500 group-hover:text-white duration-200" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                            </svg>
                        </button>
                    </>

            </div>
            )}
        </div>
    );
}

export default CommentsCard;