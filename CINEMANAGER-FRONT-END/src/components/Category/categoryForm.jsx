import React, {useState} from 'react';
import useAddCategory from "../../Hooks/Categories/addCategory.js";


function CategoryForm({removeForm, onAddCategory}) {
    const [categoryName, setCategoryName] = useState('');
    const {addCategory} = useAddCategory();

    const handlechange = (event) => {
        setCategoryName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newCategoy = await addCategory(categoryName, removeForm);
            if(newCategoy && newCategoy._id) {
                onAddCategory(newCategoy);
            } else {
                console.error("Room data is incomplete", newCategoy);
            }
        } catch (error) {
            console.error("Error Adding Room", error);
        }

    };
    const handleFormClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div  className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={removeForm} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={handleFormClick}
                    className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[30%] h-[30%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Create New Category</h1>
                    <form onSubmit={handleSubmit}>
                        <div className=" flex items-center pt-6">
                            <input type="text" name="category" value={categoryName} onChange={handlechange}
                                   className={`py-2 px-3  placeholder:text-gray-200 border border-1 border-gray-900 rounded w-[100%]  font-serif font-medium placeholder:px-4`}/>
                        </div>
                        <div className="flex justify-center items-center gap-3 py-7">
                            <button
                                className="text-black bg-amber-500 hover:bg-amber-400 duration-300 font-serif font-medium px-10 py-2 rounded">Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }

            export default CategoryForm;