import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
import {connect} from 'react-redux';
import Button from '../../components/Buttons/Buttons';
import * as action from '../../store/action/index';
import Spinner from '../../components/Spinner/Spinner';


class Movies extends Component{
    componentDidMount(){
        const page = this.props.page
        const movieType = this.props.match.params.moviesType
        this.props.onInitialMovies(page,movieType)
    }

    componentDidUpdate(prevProps){
        const page = this.props.page
        const movieType = this.props.match.params.moviesType
        const linkId = this.props.linkId
        const userInput = this.props.userInput;
        //render when page change
        if(page !== prevProps.page){
            if(this.props.match.url === '/search'){
                this.props.onClearMovie();
                this.props.onSearchMovie(page,userInput)
            } else if (this.props.match.url === '/genre'){
                this.props.onClearMovie();
                this.props.onGetMovieByGenreHandler(page,linkId)
            }
            this.props.onInitialMovies(page,movieType)
        // rerender when ulr change
        } else if(this.props.match.params.moviesType !== prevProps.match.params.moviesType || this.props.location.search !== prevProps.location.search){
            this.props.onResetPaginationHandler()
            this.props.onClearMovie();
            if(this.props.match.url !== '/search' || this.props.match.url !== '/genre'){
                this.props.onInitialMovies(page,movieType)
            }
            else if(this.props.match.url === '/search'){
                this.props.onSearchMovie(page,userInput)
            }else if(this.props.match.url === '/genre'){
                this.props.onGetMovieByGenreHandler(page,linkId)
            }

        }
    }
    render(){
        let movies;
        let title;
        if(this.props.movies){
            movies = this.props.movies.results.map(el =>{

            return <Movie
                        image = {el.poster_path}
                        key = {el.id}
                        alt = {el.overview}
                        clicked = {()=>this.props.onMovieDetailHandler(el.id)}/>
            })
        }else{
            movies = <Spinner/>
        }
        if(this.props.match.params.moviesType.includes('_')){
            title =this.props.match.params.moviesType.match(/_(.*)/)[1].toUpperCase();
        } else {
            title = this.props.match.params.moviesType.toUpperCase()
            if(this.props.location.search !== ''){
                title = this.props.location.search.match(/\?(.*)/)[1].toUpperCase()
            }
        }
        return (
            <div className = {style.Container}>
                <h1>{title} MOVIES</h1>
                <div className = {style.Movies}>
                      {movies}
                </div>
                {this.props.movies ?<Button
                    show = {this.props.page > 1 ? false:true }
                    hide = {this.props.page === this.props.movies.total_pages?true:false}
                    next = {this.props.onNextPageHandler}
                    prev = {this.props.onPrevPageHanlder}/>:null}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        movies: state.movie.movies,
        page: state.movie.page,
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
        onResetPaginationHandler: ()=>dispatch(action.resetPagination()),
        onSearchMovie:(page,input) => dispatch(action.searchMovie(page,input)),
        onGetMovieByGenreHandler: (page,id)=> dispatch(action.getMoviesLink(page,id)),
        onClearMovie: ()=>dispatch(action.clearMovie())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies)