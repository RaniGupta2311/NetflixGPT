import { NETFLIX_BG_IMG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null);
  const password=useRef();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  const handleButtonClick=()=>{
    console.log(email.current.value)
    console.log(password.current.value);
     // validate the form data
   const message= checkValidData(email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMG_URL} alt="background-image" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-85 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />

        <p className="text-red-700 font-bold text-lg">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SignUp Now"
            : "Already have account? SignIn Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
