import React from 'react';
import style from './Movie.module.css';
const movie = props =>{

    return (
        <div className = {style.Movie}>
            <img src = "https://image.tmdb.org/t/p/w300/zRBaZxS5YauLvRYjAdL4AUCwlht.jpg"/>
            <h3>Pirates of the Caribbean: The Curse of the Black Pearl</h3>
        </div>
    )
}
export default movie