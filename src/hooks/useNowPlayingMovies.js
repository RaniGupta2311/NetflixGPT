import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {useEffect} from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    async function getNowPlayingMovies(){
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const jsonData=await data.json();
        // console.log(jsonData.results);
        dispatch(addNowPlayingMovies(jsonData.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}
