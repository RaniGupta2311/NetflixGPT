import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    // fetch trailer video && updating the store with trailer video data
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const jsonData = await data.json();
      // console.log("videoBackground", jsonData);
      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : jsonData.results[0];
      // console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
}