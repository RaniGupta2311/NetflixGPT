import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BG_IMG_URL } from "../utils/constants";

const GptSearch=()=>{
    return (
        <div>
             <div className="absolute -z-10">
                 <img src={NETFLIX_BG_IMG_URL} alt="background-image" />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}
export default GptSearch;