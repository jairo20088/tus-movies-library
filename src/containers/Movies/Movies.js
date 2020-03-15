import React,{Component} from 'react';
import style from './Movies.module.css';
import Movie from '../../components/Movie/Movie';
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
            </div>
        )
    }
} 
export default Movies