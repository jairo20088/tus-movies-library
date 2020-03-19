import * as actionTypes from '../action/actionTypes';

const initialState = {
    movies:null,
    page: 1
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIAL_GET_MOVIES:
            return {...state,movies:action.popularMovies}
        case actionTypes.GO_NEXT_PAGE:
            return {...state,page:state.page +1}
        case actionTypes.GO_PREV_PAGE:
            return{...state,page:state.page -1}
        default:
            return state
    }
}
export default reducer;
