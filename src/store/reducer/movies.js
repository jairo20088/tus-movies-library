import * as actionTypes from '../action/actionTypes';

const initialState = {
    movies:null,
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIAL_GET_MOVIES:
            return {...state,movies:action.popularMovies}
        default:
            return state
    }
}
export default reducer;
