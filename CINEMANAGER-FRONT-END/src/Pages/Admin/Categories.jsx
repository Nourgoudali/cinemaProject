import React, {useState} from 'react';
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import CategoryCard from "../../components/Category/categoryCard.jsx";
import CategoryForm from "../../components/Category/categoryForm.jsx";
import useAddCategory from "../../Hooks/Categories/addCategory.js";
import useGetAllCategories from "../../Hooks/Categories/getAllCategories.js";
function Categories() {

    const [showForm, setShowForm] = useState(false);

    const { showSuccessMessage, success } = useAddCategory();
    const { categories, setCategories} = useGetAllCategories();

    const handleAddCategory = (newCategory) => {
        setCategories((prevCategory) => [...prevCategory, newCategory]);
    }

    const handleDeleteCategory = (deleteId) => {
        setCategories((prevCategories) => prevCategories.filter(category => category._id !== deleteId))
    }





    return (
        <div className="flex bg-white">
            <SidBar/>
            <div className="w-full">
                <Header/>

                {showSuccessMessage && (
                    <div className="absolute w-full mt-3">
                        {success && (
                            <p className="text-green-800 bg-green-300 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-green-400/60">
                                {success}
                            </p>
                        )}
                    </div>
                )}
                <div className="flex justify-between items-center px-10 py-8">
                    <h1 className="text-black font-serif font-bold text-3xl">Categories</h1>
                    <div onClick={() => setShowForm(true)}
                         className="bg-amber-500 px-10 py-2 flex items-center gap-2 rounded hover:bg-amber-400 duration-300 cursor-pointer">
                        <svg className="w-6 h-6 text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap necap="round" strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 12h14m-7 7V5"/>
                        </svg>
                        <button className="text-white  font-bold font-serif text-lg">category</button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start items-center gap-3 w-[96%] mx-auto ">
                    {categories.map((category) => (
                        <CategoryCard key={category._id} name={category.name} categoryId={category._id} onDelete={handleDeleteCategory}/>
                    ))}
                </div>
                {showForm &&
                    <CategoryForm removeForm={() => setShowForm(false)} onAddCategory={handleAddCategory}/>
                }
            </div>
        </div>
    );
}

export default Categories;