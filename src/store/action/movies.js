import * as action from './actionTypes';
import axios from '../../axios';

export const initialMovies = (movies)=>{
    return {
        type:action.INITIAL_GET_MOVIES,
        popularMovies:movies
    }
}
export const getPopularMovies = (page,movieType,userInput,id) =>{
    return dispatch =>{
        if(movieType === 'top_rated' || movieType === 'upcoming'|| movieType === 'popular'){
            axios.get(`/movie/${movieType}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
            .then(res =>{
            dispatch(initialMovies(res.data.results))
            })
        }    
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
        axios.get(`/movie/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(data =>{
            dispatch(movieDetails(data.data))
        })
    }
}

/* https://api.themoviedb.org/3/discover/movie?api_key=0ad9525d7beedbb790ddebfc31839baa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28 */


