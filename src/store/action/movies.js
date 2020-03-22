import * as action from './actionTypes';
import axios from '../../axios';

export const initialMovies = (movies)=>{
    return {
        type:action.INITIAL_GET_MOVIES,
        popularMovies:movies
    }
}
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

export const getPopularMovies = (page,movieType) =>{
    console.log(movieType)
    return dispatch =>{
        axios.get(`/movie/${movieType}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
        .then(res =>{
            dispatch(initialMovies(res.data.results))
            console.log(res.data)
        })
    }
}
export const movieDetails = (detail)=>{
    return{
        type:action.GET_MOVIE_DETAIL,
        details:detail
    }
}
export const getMovieDetails = (id)=>{
    return dispatch =>{  
    
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(data =>{
            dispatch(movieDetails(data.data))
            console.log(data.data)
        })
    }
}

