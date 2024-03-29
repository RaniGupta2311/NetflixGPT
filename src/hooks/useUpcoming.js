import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

export const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    async function getUpcomingMovies(){
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const jsonData=await data.json();
        // console.log(jsonData.results);
        dispatch(addUpcomingMovies(jsonData.results))
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}
