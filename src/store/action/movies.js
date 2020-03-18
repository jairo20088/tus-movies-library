import * as action from './actionTypes';
import axios from '../../axios';

export const initialMovies = (movies)=>{
    return {
        type:action.INITIAL_GET_MOVIES,
        popularMovies:movies
    }
}
export const movieDetails = (detail)=>{
    return{
        type:action.GET_MOVIE_DETAIL,
        movieDetail:detail
    }
}
export const getPopularMovies = () =>{

    return dispatch =>{
        axios.get(`/movie/popular?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=1`)
        .then(res =>{
            dispatch(initialMovies(res.data.results))
            console.log(res.data.results)
        })
    }
}





/* export const getMovieDetail = (id)=>{
    return dispatch =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
        .then(res =>{
            
        })
    }
} */


 /* res.data.results.forEach(el => { 
                axios.get(`https://api.themoviedb.org/3/movie/${el.id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`).then(response =>{

                    movieDetail.push({img:`https://image.tmdb.org/t/p/w300${response.data.poster_path}`,title:el.title})

                })
                
                //movieDetail.push({poster:el.poster_path,id:el,title:el.title})
                
            }); */

