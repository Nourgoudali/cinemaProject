import React from 'react';
import backgroundImg from "../../assets/bgLogin.jpeg";
import logo from "../../assets/logo.png";
import Input from "../../components/Input.jsx"
import Button from "../../components/AuthBtn.jsx"
import useForgetPassword from "../../Hooks/Auth/UseForgetPassword.js";
function ForgetPassword() {
    const {setEmail, handleSubmit, email, success, showSuccessMessage,error, showErrorMessage} = useForgetPassword();
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className=" relative bg-black w-[25%] mx-auto shadow-black shadow-xl mt-24">
                    {showSuccessMessage && (
                        <div className="absolute w-full py-5">
                            {success && <p className="text-green-900 bg-green-200 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-green-400/60">{success}</p>}
                        </div>
                    )}
                    {showErrorMessage && (
                        <div className="absolute w-full py-5">
                            {error &&
                                <p className="text-red-800 bg-red-300 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-red-400/60">{error}</p>}
                        </div>
                    )}
                    <form className="flex flex-col px-10 py-10" onSubmit={handleSubmit}>
                        <h1 className="text-white font-bold font-serif text-4xl py-10">Forget Password</h1>
                        <Input name="email" type="email" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div className="py-5">
                            <Button text="Send Reset Email" type="submit" />
                        </div>

                    </form>
                </div>

            </div>
        </>
    );
}

export default ForgetPassword;