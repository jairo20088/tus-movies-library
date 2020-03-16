import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
import MovieDescription  from '../../components/MovieDescription/MovieDescription';
import {connect} from 'react-redux'

class Movies extends Component{

    

    render(){
       

        return (
            <div className = {style.Container}>
                <h1>Most Popular </h1>

                <div className = {style.Movies}>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                   

                </div>
                {this.props.showDescription ? <MovieDescription/>:null}

            </div>
        )
    }
} 
const mapStateToProps = state =>{
    return{
        showDescription: state.description
    }
}
export default connect(mapStateToProps)(Movies)