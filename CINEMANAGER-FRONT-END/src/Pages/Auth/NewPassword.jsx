import React from 'react';
import backgroundImg from "../../assets/bgLogin.jpeg";
import logo from "../../assets/logo.png";
import Input from "../../components/Input.jsx";
import Button from "../../components/AuthBtn.jsx";
import useNewPassword from "../../Hooks/Auth/useNewPassword.js";

function NewPassword() {
    const { setNewPassword, handleSubmit, error } = useNewPassword();
    return (
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImg}`}}>

            <div className="py-2 px-7">
                <img className="h-[150px]" src={logo} alt=""/>
            </div>

            <div className="bg-black w-[25%] mx-auto shadow-black shadow-xl mt-24">
                <form className="flex flex-col px-10 py-10" onSubmit={handleSubmit}>
                    <h1 className="text-white font-bold font-serif text-4xl py-8">New Password</h1>
                    <Input name="newPassword" type="password" placeholder="Enter Your New Password" onChange={(e) => setNewPassword(e.target.value)}/>
                    <div className="py-5">
                        <Button text="Reset" type="submit"/>
                        {error && <p className="text-red-500 mt-2">{error.message}</p>}
                    </div>
                </form>
            </div>
        </div>

    );
}

export default NewPassword;