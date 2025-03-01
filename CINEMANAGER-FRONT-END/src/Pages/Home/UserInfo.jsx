import React, {useState, useEffect} from 'react';
import flash from "../../assets/flash.png";
import Input from "../../components/Input.jsx";
import Button from "../../components/AuthBtn.jsx"
import useUpdateProfile from "../../Hooks/Users/useUpdateProfile.js";
import {Link} from "react-router-dom";


function UserInfo({removeForm}) {

    const {updateProfile} = useUpdateProfile();
    const [formData, setFormData] = useState({
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            profilePicture: null,
    });


    useEffect(() => {
        const userData = {
            email: localStorage.getItem('email') || '',
            phone: localStorage.getItem('phone') || '',
            userName: localStorage.getItem('userName') || '',
        };

        setFormData({
            fullName: userData.userName,
            phoneNumber: userData.phone,
            email: userData.email,
            password: '',
            profilePicture: null
        });
    }, []);


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file' && files && files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                profilePicture: files[0],
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                const previewImg = document.getElementById('preview_img');
                if (previewImg) {
                    previewImg.src = reader.result;
                }
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = new FormData();

        dataToSend.append('fullName', formData.fullName);
        dataToSend.append('phoneNumber', formData.phoneNumber);
        dataToSend.append('email', formData.email);
        dataToSend.append('password', formData.password);
        if (formData.profilePicture) {
            dataToSend.append('profilePicture', formData.profilePicture);
        }

        const response = await updateProfile(dataToSend);
        if (response.status === 200) {
            removeForm();
        }

        await updateProfile(dataToSend)
    }

    const handleFormClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/80`}>
            <div onClick={removeForm} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/30`}>
                <div onClick={handleFormClick}
                    className="flex flex-col justify-center items-center  shadow rounded bg-black  shadow-gray-300/50 w-[40%] mt-32 mx-auto">
                    <form onSubmit={handleSubmit} className="w-full py-12">

                        <div className="flex flex-col items-center justify-center space-x-6 py-5">
                            <div className="shrink-0">
                                <img id='preview_img' className="h-44 w-44 object-cover rounded-full"
                                     src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                                     alt="Current profile photo"/>
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file" name="profilePicture" onChange={handleChange}
                                       className="block text-white w-full text-sm text-slate-500file:mr-4 file:py-2 file:px-4file:rounded-full file:border-0file:text-sm file:font-semiboldfile:bg-violet-50 file:text-violet-700hover:file:bg-violet-1"/>
                            </label>
                        </div>

                        <h1 className="text-white text-center text-4xl font-serif font-bold underline ">Your
                            Informations</h1>

                        <div className="flex justify-center items-center gap-5 w-full pt-10 px-5">
                            <div className="w-full">
                                <label className="text-white font-serif" htmlFor="">Full Name</label>
                                <Input onChange={handleChange} value={formData.fullName}
                                       className="text-white font-serif" name="fullName" type="text"
                                       className="w-96 px-2 placeholde:text-gray-500"></Input>
                            </div>
                            <div className="w-full">
                                <label className="text-white font-serif" htmlFor="">Phone Number</label>
                                <Input onChange={handleChange} value={formData.phoneNumber}
                                       className="text-white font-serif" name="phoneNumber" type="text"
                                       className="w-96 px-2 placeholde:text-gray-500"></Input>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5 w-full py-5 px-5">
                            <div className="w-full">
                                <label className="text-white font-serif" htmlFor="">Adress Email</label>
                                <Input onChange={handleChange} value={formData.email} className="text-white font-serif"
                                       name="email" type="email"
                                       className="w-96 px-2 placeholde:text-gray-500"></Input>
                            </div>
                            <div className="w-full">
                                <label className="text-white font-serif" htmlFor="">Password</label>
                                <Input onChange={handleChange} value={formData.password}
                                       className="text-white font-serif" name="password" type="password"
                                       className="w-96 px-2 placeholde:text-gray-500"></Input>
                            </div>
                        </div>
                        <div className="flex w-[50%] mx-auto gap-5 pt-8">
                            <Button text="Update" className="" type="submit"></Button>

                            <Link className="" to="/home"><Button onClick={removeForm} text="Cancel"
                                                     className="bg-gray-200 hover:bg-white duration-300 px-10"></Button></Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        );
    }

                export default UserInfo;