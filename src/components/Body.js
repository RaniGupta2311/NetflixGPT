import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from "react";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Body=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in or signedup, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            // console.log("auth state change")
            // navigate("/browse")
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            // console.log("auth else state change")
            // navigate("/")
          }
        }); 
      },[])

    return (
        <div>
            <Login/>
            <Browse/>
        </div>
    )
}
export default Body;