
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse=()=>{
    // fetch data eom TMDB API and update store
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
            <Header/>
            
                {/* 
                Main Container
                    - Video Background
                    - Video Title
                Secondary Contaner
                    -MovieList *m
                        - cards * n
                 */}
            
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;