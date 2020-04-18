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
export const errorHandler = (error)=>{
    return {
        type:actionType.ERROR_HAS_OCCURED,
        error:error
    }
}

export const searchMovie = (page,input)=>{
    return dispatch =>{
        if(input !==''){
            axios.get(`/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${input}&page=${page}&include_adult=false`)
            .then(res =>{
                dispatch(initialMovies(res.data))
                if(!res.data.results.length <= 0){
                    dispatch(initialMovies(res.data))
                }else{
                    dispatch(errorHandler('Sorry, could not find movie'))
                }
            }).catch(e =>{
                dispatch(errorHandler(e.message))
            })
        }
    }
}

export const genreList = data=>{
    return {
        type:actionType.GET_GENRE_LIST,
        genreList :data
    }
}
export const getListGenre = () =>{
    return dispatch =>{
        axios.get(`/genre/movie/list?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(res =>{
            dispatch(genreList(res.data.genres))
            //console.log(res.data.genres)
        }).catch(e =>{
            dispatch(errorHandler(e.message))
        })
    }
}
 export const getLink = (id)=>{
    return {
        type:actionType.GET_LINK,
        linkId:id
    }
}

export const getMoviesLink = (page,id)=>{
    return dispatch =>{
        dispatch(getLink(id))
        axios.get(`/discover/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
        .then(res =>{
            //console.log(res.data)
            dispatch(initialMovies(res.data))
        }).catch(e =>{
            dispatch(errorHandler(e.message))
        })
    }
}