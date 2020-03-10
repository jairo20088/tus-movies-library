import * as actionTypes from '../action/actionTypes';

const initialState = {
    show: false
}

const reducer = (state = initialState,action)=>{

    switch(action.type){

        case actionTypes.DISPLAY_SIDE_NAV:
            return {...state,show:!state.show}
        default:
            return state
    }
    
}
export default reducer;
