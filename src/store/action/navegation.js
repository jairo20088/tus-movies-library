import * as actionType from './actionTypes'; 

export const displaySideDraw = ()=>{
    return {
        type:actionType.DISPLAY_SIDE_NAV
    }
}
export const navegation = ()=>{
    return dispatch => {
        dispatch(displaySideDraw())
        
    }

}