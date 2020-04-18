import React,{Component} from 'react';
import {connect} from 'react-redux';
import MovieDescription from '../../components/MovieDescription/MovieDescription';

class Description extends Component{

    render(){
        return (
            <div>
                {this.props.detail ? <MovieDescription
                    img = {this.props.movieDetail.poster_path}
                    bg = {this.props.movieDetail.backdrop_path}
                    title = {this.props.movieDetail.title}
                    description = {this.props.movieDetail.overview}
                    genres = {this.props.movieDetail.genres.map(el => el.name).join(', ')}
                    trailer = {this.props.trailer}
                    vote = {this.props.movieDetail.vote_average}/>:null}
            </div>
        )

    }
}
const mapStateToProps = state =>{
    return{
        detail: state.movie.detail,
        movieDetail:state.movie.movieDetails,
        trailer:state.movie.movideTrailer
    }
}
export default connect(mapStateToProps)(Description)