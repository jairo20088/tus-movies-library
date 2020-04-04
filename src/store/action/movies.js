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


export const getUserInput = (text)=>{
    return {
        type:action.GET_USER_INPUT,
        userInput : text,
    }
}

export const movieSearch = (data)=>{
    return {
        type:action.MOVIE_SEARCH,
        movieSearch : data
    }
}


export const getPopularMovies = (page,movieType,userInput) =>{
    
    return dispatch =>{
        
        if(movieType === 'top_rated' || movieType === 'upcoming'|| movieType === 'popular'){
            axios.get(`/movie/${movieType}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
            .then(res =>{
            dispatch(initialMovies(res.data.results))
                //console.log(res)
            })
        } else {
            axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${userInput}&page=${page}&include_adult=false`)
            .then(res =>{
               // console.log(res.data)
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
    
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(data =>{
            dispatch(movieDetails(data.data))
            //console.log(data.data)
        })
    }
}
export const searchMovie = (input)=>{
    return dispatch =>{
        axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${input}&page=1&include_adult=false`)
            .then(res =>{
               // console.log(res.data)
                dispatch(initialMovies(res.data.results))
        })
    }
}



