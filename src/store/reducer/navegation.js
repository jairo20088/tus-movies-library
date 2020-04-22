import * as actionTypes from '../action/actionTypes';


const initialState = {
    showNav: false,
    showBackDrop: false,
    IdElement:null,
    userInput: '',
    genre: null
}
const getUserInput = (state,action)=>{
    return {...state,userInput:action.userInput,error:null}
}
const getGenreId = (state,action )=>{
    return {...state,IdElement:action.linkId,userInput:'',error:null}
}
const toggleSideNav = (state,action)=>{
    return {...state,showNav:!state.showNav,showBackDrop:!state.showBackDrop}
}
const hideBackdrop = (state,action)=>{
    return {...state,showNav:false,showBackDrop:false}
}
const getGenreList = (state,action)=>{
    return {...state,genre:action.genreList,error:null}
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_USER_INPUT:return getUserInput(state,action)
        case actionTypes.GET_LINK:return getGenreId(state,action)
        case actionTypes.TOGGLE_SIDE_NAV:return toggleSideNav(state,action)
        case actionTypes.HIDE_BACKDROP:return hideBackdrop(state,action)
        case actionTypes.GET_GENRE_LIST:return getGenreList(state,action)
        default:
            return state
    }
}
export default reducer;
