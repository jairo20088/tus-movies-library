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


export const getPopularMovies = (page,movieType,userInput,id) =>{
    
    const genreList = ['Action','Adventure','Animation','Comedy','Crime','Documentary','Drama','Family','Fantasy','History','Horror','Music','Mystery','Romance','Science Fiction','TV Movie','Thriller','War','Western']


    return dispatch =>{
        
        if(movieType === 'top_rated' || movieType === 'upcoming'|| movieType === 'popular'){
            axios.get(`/movie/${movieType}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
            .then(res =>{
            dispatch(initialMovies(res.data.results))
               // console.log(res.data)
            })
        } else if (userInput !== '' &&(movieType === 'top_rated' || movieType === 'upcoming'|| movieType === 'popular')){
            axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${userInput}&page=${page}&include_adult=false`)
            .then(res =>{
                //console.log(res.data)
                dispatch(initialMovies(res.data.results))
            })
        } else {

            axios.get(`/discover/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
            .then(res =>{
                console.log(res.data)
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
            //console.log(data.data)
        })
    }
}
export const searchMovie = (page,input)=>{
    return dispatch =>{
        
        if(input !==''){
            axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${input}&page=${page}&include_adult=false`)
            .then(res =>{
               //console.log(res.data)
                dispatch(initialMovies(res.data.results))
        })
        }
        
    }
}

export const genreList = data=>{
    return {
        type:action.GET_GENRE_LIST,
        genreList :data
    }
}
export const getListGenre = () =>{
    return dispatch =>{
        axios.get(`/genre/movie/list?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(res =>{
            dispatch(genreList(res.data.genres))
            //console.log(res.data.genres)
        })
    }
}

export const getLink = (id)=>{
    return {
        type:action.GET_LINK,
        linkId:id
    }
}

export const getMoviesLink = (id,page)=>{

    console.log(id)
    return dispatch =>{
        dispatch(getLink(id))
        axios.get(`/discover/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
        .then(res =>{
            
            dispatch(initialMovies(res.data.results))
        })
    }
}

/* https://api.themoviedb.org/3/discover/movie?api_key=0ad9525d7beedbb790ddebfc31839baa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28 */


