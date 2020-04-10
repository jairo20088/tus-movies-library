import * as actionType from './actionTypes';
import axios from '../../axios';

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
export const getUserInput = (text)=>{
    return {
        type:actionType.GET_USER_INPUT,
        userInput : text,
    }
}
export const initialMovies = (movies)=>{
    return {
        type:actionType.INITIAL_GET_MOVIES,
        popularMovies:movies
    }
}

export const searchMovie = (page,input)=>{
    return dispatch =>{ 
        if(input !==''){
            axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${input}&page=${page}&include_adult=false`)
            .then(res =>{
               console.log(res.data)
                dispatch(initialMovies(res.data.results))
        })
        } 
    }
}
