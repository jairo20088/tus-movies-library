import * as actionTypes from '../action/actionTypes';

const initialState = {
    movies:null,
    page: 1,
    detail: false,
    movieDetails:null,
    userInput: '',
    genre:null
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIAL_GET_MOVIES:
            return {...state,movies:action.popularMovies}
        case actionTypes.GO_NEXT_PAGE:
            return {...state,page:state.page +1}
        case actionTypes.GO_PREV_PAGE:
            return{...state,page:state.page -1}
        case actionTypes.GET_MOVIE_DETAIL:
            return {...state,detail:true,movieDetails:action.details,showBackDrop:true}
        case actionTypes.RESET_PAGINATION:
            return {...state,page:1}
        case actionTypes.HIDE_BACKDROP:
            return {...state,detail:false}
        case actionTypes.GET_USER_INPUT:
            return {...state,userInput:action.userInput}
        case actionTypes.GET_GENRE_LIST:
            return {...state,genre:action.genreList}
        default:
            return state
    }
}
export default reducer;
