import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

export const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    async function getTopRatedMovies(){
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const jsonData=await data.json();
        // console.log(jsonData.results);
        dispatch(addTopRatedMovies(jsonData.results))
    }
    useEffect(()=>{
        getTopRatedMovies();
    },[])
}
