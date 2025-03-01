import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/bgLogin.jpeg'
import {Link} from "react-router-dom";
import Input from "../../components/Input.jsx"
import Button from "../../components/AuthBtn.jsx";
import useSignIn from "../../Hooks/Auth/UseSignIn.js";
import React from "react";
function SignIn() {
    const { formData, handleSubmit, error, handleChange, showErrorMessage} = useSignIn();
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className=" relative bg-black w-[25%] mx-auto shadow-black shadow-xl">
                    {showErrorMessage && (
                        <div className="absolute w-full mt-3">
                            {error && <p className="text-red-800 bg-red-300 w-[80%] mx-auto py-3 text-center font-medium font-serif rounded shadow-lg shadow-red-400/60">{error}</p>}
                        </div>
                    )}
                    <form className="flex flex-col px-10 py-12" onSubmit={handleSubmit}>
                        <h1 className="text-white font-bold font-serif text-4xl py-8">Sign In</h1>
                        <Input name="email" type="email" placeholder="Email Address" value={formData.email}
                               onChange={handleChange}/>
                        <div className="py-5">
                            <Input name="password" type="password" placeholder="Password" value={formData.password}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <Button text="Sign In" type="submit"/>
                        </div>
                        <p className="text-white font-serif font-medium text-center py-3">OR</p>
                        <Link to="/signup">
                            <Button text="Sign Up" type="submit" className="bg-white hover:bg-gray-200"/>
                        </Link>
                        <Link to="/UseForgetPassword"
                              className="text-center text-gray-200 font-serif py-5 hover:underline cursor-pointer">Forgot
                            password?</Link>
                        <p className="text-gray-300 font-serif">New to Cinema ? <span
                            className="text-white font-serif font-medium hover:underline cursor-pointer">Sign up now.</span>
                        </p>
                    </form>
                </div>

            </div>
        </>
    );
}

export default SignIn;