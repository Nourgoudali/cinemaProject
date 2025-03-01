import React, {useEffect} from 'react';
import useAddComment from "../Hooks/Comment/useAddComment.js";
import useUpdateComment from "../Hooks/Comment/useUpdateComment.js";

function CommentsInput({ movieId, fetchMovieDetails, editingComment, setEditingComment, editingCommentId, setEditingCommentId }) {

    const { addComment } = useAddComment();
    const { updateComment } = useUpdateComment();

    const handleSubmit = async (e) => {
        e.preventDefault();
       if(editingComment.trim() === '') return;

        if (editingCommentId) {
            await updateComment(movieId, editingCommentId, editingComment);
            setEditingCommentId(null);
        } else {
            // Add new comment
            await addComment(movieId, editingComment);
        }

        fetchMovieDetails();
        setEditingComment(''); // Clear the input
    };

    useEffect(() => {
        setEditingComment(editingComment);
    }, [editingComment]);

    return (
        <form  className="py-3">
            <label htmlFor="chat" className="sr-only">Your message</label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-black border border-white">

                <button type="button"
                        className="p-2 text-gray-200 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-amber-400 duration-300">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"
                              d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                    </svg>
                    <span className="sr-only">Add emoji</span>
                </button>
                <textarea value={editingComment} onChange={(e) => setEditingComment(e.target.value)} id="chat" rows="1"
                          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-600 "
                          placeholder="Your message..."></textarea>
                <button onClick={handleSubmit} type="submit"
                        className="inline-flex justify-center p-2 text-amber-500 rounded-full cursor-pointer hover:bg-blue-100 dark:text-amber-500 dark:hover:bg-white duration-300">
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path
                            d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>
    );
}

export default CommentsInput;