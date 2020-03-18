import React from 'react';
import style from './Movie.module.css';
const movie = props =>{

    return (
        <div className = {style.Movie}>
            <img src = {`https://image.tmdb.org/t/p/w500${props.image}`} alt = {props.alt}/>
            
        </div>
    )
}
export default movie