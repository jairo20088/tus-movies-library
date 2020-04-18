import * as actionTypes from '../action/actionTypes';

const initialState = {
    movies:null,
    page: 1,
    detail: false,
    movieDetails:null,
    userInput: '',
    genre:null,
    IdElement:null,
    movideTrailer:null,
    error: null

}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIAL_GET_MOVIES:
            return {...state,movies:action.popularMovies,error:null}
        case actionTypes.GO_NEXT_PAGE:
            return {...state,page:state.page +1,error:null}
        case actionTypes.GO_PREV_PAGE:
            return{...state,page:state.page -1,error:null}
        case actionTypes.GET_MOVIE_DETAIL:
            return {...state,detail:true,movieDetails:action.details,showBackDrop:true,error:null}
        case actionTypes.RESET_PAGINATION:
            return {...state,page:1,error:null}
        case actionTypes.HIDE_BACKDROP:
            return {...state,detail:false,error:null}
        case actionTypes.GET_USER_INPUT:
            return {...state,userInput:action.userInput,error:null}
        case actionTypes.GET_GENRE_LIST:
            return {...state,genre:action.genreList,error:null}
        case actionTypes.GET_LINK:
            return {...state,IdElement:action.linkId,userInput:'',error:null}
        case actionTypes.CLEAR_MOVIE:
            return {...state, movies:'',error:null}
        case actionTypes.GET_MOVIE_TRAILER:
            return {...state, movideTrailer:action.trailer,error:null}
        case actionTypes.ERROR_HAS_OCCURED:
            return {...state,error:action.error}

        default:
            return state
    }
}
export default reducer;
