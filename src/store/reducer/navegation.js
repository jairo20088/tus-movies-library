import * as actionTypes from '../action/actionTypes';

const initialState = {
    showNav: false,
    showBackDrop: false,
    description:false
}

const reducer = (state = initialState,action)=>{

    switch(action.type){

        case actionTypes.DISPLAY_SIDE_NAV:
            return {...state,showNav:!state.showNav,showBackDrop:!state.showBackDrop}
        default:
            return state
    }
    
}
export default reducer;
