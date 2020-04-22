import * as actionTypes from '../action/actionTypes';

const initialState = {
    movies:null,
    detail: false,
    movieDetails:null,
    movideTrailer:null,
    error: null
}

const getInitialMovies = (state,action)=>{
    return {...state,movies:action.popularMovies,error:null}
}
const getMovieDetails = (state,action) =>{
    return {...state,detail:true,movieDetails:action.details,showBackDrop:true,error:null}
}
const hideBackdrop = (state,action)=>{
    return {...state,detail:false,error:null}
}
const clearMovie = (state,action) =>{
    return {...state, movies:'',error:null}
}
const getMovieTrailer = (state,action)=>{
    return {...state, movideTrailer:action.trailer,error:null}
}
const getError = (state,action)=>{
    return {...state,error:action.error}
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIAL_GET_MOVIES: return getInitialMovies(state,action)
        case actionTypes.GET_MOVIE_DETAIL: return getMovieDetails(state,action)
        case actionTypes.HIDE_BACKDROP: return hideBackdrop(state,action)
        case actionTypes.CLEAR_MOVIE:return clearMovie(state,action)
        case actionTypes.GET_MOVIE_TRAILER:return getMovieTrailer(state,action)
        case actionTypes.ERROR_HAS_OCCURED:return getError(state,action)
        default:
            return state
    }
}
export default reducer;
