import * as action from './actionTypes';

export const goToNextPage = ()=>{
    return{
        type:action.GO_NEXT_PAGE
    }
}
export const goPrevPage = () =>{
    return{
        type:action.GO_PREV_PAGE
    }
}
export const hideBackDrop = ()=>{
    return{
        type:action.HIDE_BACKDROP
    }
}
export const resetPagination = ()=>{
    return{
        type:action.RESET_PAGINATION
    }
}
export const clearMovie = ()=>{
    return {
        type:action.CLEAR_MOVIE
    }
}

export const displaySideDraw = ()=>{
    return {
        type:action.TOGGLE_SIDE_NAV
    }
}
export const hideBackdrop = ()=>{
    return{
        type:action.HIDE_BACKDROP
    }
}