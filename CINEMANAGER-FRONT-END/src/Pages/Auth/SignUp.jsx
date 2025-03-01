import backgroundImg from "../../assets/bgLogin.jpeg";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import Input from "../../components/Input.jsx"
import Button from "../../components/AuthBtn.jsx"
import useSignUp from "../../Hooks/Auth/UseSignUp.js";
function SignUp() {
    const { formData, handleChange, handleSubmit, error } = useSignUp();
    if (!formData) return null;
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className="bg-black w-[25%] mx-auto shadow-black shadow-xl">
                    <form className="flex flex-col px-10 py-10" onSubmit={handleSubmit}>
                        <h1 className="text-white font-bold font-serif text-4xl py-8">Sign Up</h1>
                        <div className="py-5">
                            <Input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} value={formData.fullName}/>
                        </div>
                            <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email}/>
                        <div className="py-5">
                            <Input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password}/>
                        </div>
                        <div>
                            <Button text="Sign Up" type="submit" />
                        </div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <p className="text-white font-serif font-medium text-center py-3">OR</p>
                        <Link to="/signin">
                            <Button text="Sign In" type="submit" className="bg-white hover:bg-gray-200"/>
                        </Link>

                    </form>
                </div>

            </div>
        </>
    );
}

export default SignUp;