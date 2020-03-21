import * as actionType from './actionTypes'; 

export const displaySideDraw = ()=>{
    return {
        type:actionType.DISPLAY_SIDE_NAV
    }
}

export const hideBackdrop = ()=>{
    return{
        type:actionType.HIDE_BACKDROP
    }
}