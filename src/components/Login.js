import { NETFLIX_BG_IMG_URL } from "../utils/constants";
import Header from "./Header";
import {useState} from "react";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
           <Header/>
           <div className="absolute">
                <img src={NETFLIX_BG_IMG_URL} alt="background-image"/>
           </div>

            <form className="bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-85 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? SignUp Now":"Already have account? SignIn Now"}</p>
            </form>

        </div>
    )
}
export default Login;