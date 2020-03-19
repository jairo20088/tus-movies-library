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
                        alt = {el.overview}/>
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

                {this.props.showDescription ? <MovieDescription/>:null}

            </div>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        popularMovie: state.movie.movies,
        showDescription:state.nav.description,
        page: state.movie.page
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onInitialMovies: (page)=>dispatch(action.getPopularMovies(page)),
        onNextPageHandler: ()=> dispatch(action.goToNextPage()),
        onPrevPageHanlder: ()=> dispatch(action.goPrevPage())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies)