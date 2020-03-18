import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
import MovieDescription  from '../../components/MovieDescription/MovieDescription';
import {connect} from 'react-redux'
import * as action from '../../store/action/index';
class Movies extends Component{

    
    componentDidMount(){
        this.props.onInitialMovies()

    }

    render(){
        let movies;
        
        if(this.props.popularMovie){
            movies = this.props.popularMovie.map(el =>{


            return <Movie 
                        image = {el.poster_path} 
                        key = {el.id}
                        alt = {el.overview}/>
        })
        }else{
            movies = <p>something here</p>
        }
        
        
        return (
            <div className = {style.Container}>
                <h1>Most Popular </h1>
                <div className = {style.Movies}>
                      {movies}   
                </div>
                {this.props.showDescription ? <MovieDescription/>:null}

            </div>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        popularMovie: state.movie.movies
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onInitialMovies: ()=>dispatch(action.getPopularMovies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies)