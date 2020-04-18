import * as action from './actionTypes';
import axios from '../../axios';

export const initialMovies = (movies)=>{
    return {
        type:action.INITIAL_GET_MOVIES,
        popularMovies:movies
    }
}
export const errorHandler = (error)=>{
    return {
        type:action.ERROR_HAS_OCCURED,
        error:error
    }
}
export const getPopularMovies = (page,movieType,userInput,id) =>{
    return dispatch =>{
        if(movieType === 'top_rated' || movieType === 'upcoming'|| movieType === 'popular'){
            axios.get(`/movie/${movieType}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
            .then(res =>{
                dispatch(initialMovies(res.data))
            }).catch(e =>{
                dispatch(errorHandler(e.message))
            })
        }
    }
}
export const movieDetails = (detail,trailer)=>{
    return{
        type:action.GET_MOVIE_DETAIL,
        details:detail,
        movieTrailer : trailer
    }
}
export const getMovieTrailer =(trailer)=>{
    return{
        type:action.GET_MOVIE_TRAILER,
        trailer:trailer
    }
}

export const getMovieDetails = (id)=>{
    return dispatch =>{
        axios.get(`/movie/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(data =>{
            dispatch(movieDetails(data.data))
        }).catch(e =>{
            dispatch(errorHandler(e.message))
        })
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(res =>{
            dispatch(getMovieTrailer(res.data.results[0].key))
        }).catch(e =>{

        })
    }
}




