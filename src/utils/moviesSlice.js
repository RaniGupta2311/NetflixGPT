import {createSlice} from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            //  action.payload;
             state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            //  action.payload;
             state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            //  action.payload;
             state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            //  action.payload;
             state.upcomingMovies=action.payload
        },
    },

});
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;