import React from 'react';
import style from './MovieDescription.module.css';
const movieDescription = props =>{


    return(
        <div className= {style.MovieDescription}>
            <div>
                <img src = 'https://image.tmdb.org/t/p/w300/zRBaZxS5YauLvRYjAdL4AUCwlht.jpg' className = {style.MovieImage}/>
            </div>
            <div>
                <h2>Pirates of the Caribbean: The Curse of the Black Pearl</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p>Genres: Action, Aventure, Drama <span> Rated: 7.7 out of 10</span></p>
                <a href = "https://www.youtube.com/watch?v=naQr0uTrH_s" target = "_blank"className = {style.Trailer}>Trailer</a>

                
            </div>
        </div>
    )
}
export default movieDescription

