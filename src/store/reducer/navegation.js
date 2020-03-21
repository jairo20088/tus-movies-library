import * as actionTypes from '../action/actionTypes';
import { act } from 'react-dom/test-utils';

const initialState = {
    showNav: false,
    showBackDrop: false
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.DISPLAY_SIDE_NAV:
            return {...state,showNav:!state.showNav,showBackDrop:!state.showBackDrop}
        case actionTypes.HIDE_BACKDROP:
            return {...state,showNav:false,showBackDrop:false}
        default:
            return state
    }
}
export default reducer;
