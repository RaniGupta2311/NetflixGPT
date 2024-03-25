import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies=()=>{
    const dispatch=useDispatch();
    async function getPopularMovies(){
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const jsonData=await data.json();
        // console.log(jsonData.results);
        dispatch(addPopularMovies(jsonData.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[])
}
