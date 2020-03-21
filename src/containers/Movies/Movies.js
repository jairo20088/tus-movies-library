import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
import MovieDescription  from '../../components/MovieDescription/MovieDescription';
import {connect} from 'react-redux';
import Button from '../../components/Buttons/Buttons';
import * as action from '../../store/action/index';
import Spinner from '../../components/Spinner/Spinner';
import BackDrop from '../../components/Backdrop/Backdrop';

class Movies extends Component{

    componentDidMount(){
        this.props.onInitialMovies(this.props.page)
    }
    componentDidUpdate(prevProps){
        if(this.props.page !== prevProps.page){
            this.props.onInitialMovies(this.props.page)
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

        return (
            <div className = {style.Container}>
                <h1>Most Popular </h1>
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
                    title = {this.props.movieDetail.original_title}
                    description = {this.props.movieDetail.overview}
                    genres = {this.props.movieDetail.genres.map(el => el.name).join(', ')}
                    vote = {this.props.movieDetail.vote_average}/>:null} 

                <BackDrop show = {this.props.detail} clicked = {this.props.onHideBackdrooHandler}/>
            </div>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        popularMovie: state.movie.movies,
        page: state.movie.page,
        detail: state.movie.detail,
        movieDetail:state.movie.movieDetails
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onInitialMovies: (page)=>dispatch(action.getPopularMovies(page)),
        onNextPageHandler: ()=> dispatch(action.goToNextPage()),
        onPrevPageHanlder: ()=> dispatch(action.goPrevPage()),
        onMovieDetailHandler: (id)=> dispatch(action.getMovieDetails(id)),
        onHideBackdrooHandler: ()=> dispatch(action.hideBackDrop())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies)