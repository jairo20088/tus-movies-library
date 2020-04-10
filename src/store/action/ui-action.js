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