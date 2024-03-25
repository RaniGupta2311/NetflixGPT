import logo from "../utils/media/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in or signedup, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            // console.log("auth state change")
            navigate("/browse")
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            // console.log("auth else state change")
            navigate("/")
          }
        }); 

        return ()=>unsubscribe();
      },[])
    return (
        <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-30 w-screen flex justify-between items-center">
            <img src={logo}
                alt="logo"
                className="w-44"
            />
            {user && <div className="flex">
                <img className="w-12 h-12" src={user?.photoURL} alt="image"/>
                <button className="text-white font-bold" onClick={handleSignout}>(Sign out)</button>
            </div>}
        </div>
    )
}
export default Header;