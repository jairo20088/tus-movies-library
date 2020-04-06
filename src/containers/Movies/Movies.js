import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
import MovieDescription  from '../../components/MovieDescription/MovieDescription';
import {connect} from 'react-redux';
import Button from '../../components/Buttons/Buttons';
import * as action from '../../store/action/index';
import Spinner from '../../components/Spinner/Spinner';


class Movies extends Component{

    componentDidMount(){
        this.props.onInitialMovies(this.props.page,this.props.match.params.moviesType,this.props.match.params.moviesType,this.props.linkId)
        
    }
    componentDidUpdate(prevProps){
    
        if(this.props.page !== prevProps.page){
            this.props.onInitialMovies(this.props.page,this.props.match.params.moviesType,this.props.match.params.moviesType,this.props.linkId)
            console.log(this.props.IdElement)
            // rerender when ulr change
        } else if(this.props.match.params.moviesType !== prevProps.match.params.moviesType){ 
            this.props.onResetPaginationHandler() 
            this.props.onInitialMovies(this.props.page,this.props.match.params.moviesType,this.props.match.params.moviesType,this.props.linkId)
            //console.log(this.props)
            
        }
        
    }
    render(){
        let movies;   
        if(this.props.popularMovie){
            movies = this.props.popularMovie.map(el =>{
            return <Movie 
                        image = {el.poster_path} 
                        key = {el.id}
                        alt = {el.overview}
                        clicked = {()=>this.props.onMovieDetailHandler(el.id)}/>
        })
        }else{
            movies = <Spinner/>
        }    
        let title; 
        if(this.props.match.params.moviesType.includes('_')){
            title =this.props.match.params.moviesType.match(/_(.*)/)[1].toUpperCase();
        } else {
            title = this.props.match.params.moviesType.toUpperCase()
        }
        return (
            <div className = {style.Container}>
                <h1>{title}</h1>
                <div className = {style.Movies}>
                      {movies}   
                </div>
                <Button 
                    show = {this.props.page > 1 ? false:true } 
                    next = {this.props.onNextPageHandler}
                    prev = {this.props.onPrevPageHanlder}/>

                 {this.props.detail ? <MovieDescription 
                    img = {this.props.movieDetail.poster_path}
                    bg = {this.props.movieDetail.backdrop_path}
                    title = {this.props.movieDetail.title}
                    description = {this.props.movieDetail.overview}
                    genres = {this.props.movieDetail.genres.map(el => el.name).join(', ')}
                    vote = {this.props.movieDetail.vote_average}/>:null} 
            </div>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        popularMovie: state.movie.movies,
        page: state.movie.page,
        detail: state.movie.detail,
        movieDetail:state.movie.movieDetails,
        userInput :state.movie.userInput,
        genre:state.movie.genre,
        linkId:state.movie.IdElement
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onInitialMovies: (page,type,search,id)=>dispatch(action.getPopularMovies(page,type,search,id)),
        onNextPageHandler: ()=> dispatch(action.goToNextPage()),
        onPrevPageHanlder: ()=> dispatch(action.goPrevPage()),
        onMovieDetailHandler: (id)=> dispatch(action.getMovieDetails(id)),
        onResetPaginationHandler: ()=>dispatch(action.resetPagination())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies)