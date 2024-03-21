import logo from "../utils/media/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header=()=>{
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    return (
        <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-30 w-screen flex justify-between items-center">
            <img src={logo}
                alt="logo"
                className="w-44"
            />
            {user && <div>
                <img src={user?.photoURL} alt="image"/>
                <button className="text-white font-bold" onClick={handleSignout}>(Sign out)</button>
            </div>}
        </div>
    )
}
export default Header;