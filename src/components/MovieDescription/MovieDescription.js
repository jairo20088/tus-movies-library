import React from 'react';
import style from './MovieDescription.module.css';
import styled from 'styled-components'

const movieDescription = props =>{

    const NewStyle = styled.div`
        text-align: center;
        padding: 5rem;
        width: 104rem;
        background-image: linear-gradient(rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.85)),url(https://image.tmdb.org/t/p/w500${props.bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #fff;
        position: fixed;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%) scale(0);
        display: grid;
        grid-template-columns: 30rem 1fr;
        animation-name: popup;
        animation-delay: .2s;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        z-index: 1000;
}
    @keyframes popup{
        0%{ transform: translate(-50%,-50%) scale(0)}
        100%{transform: translate(-50%,-50%) scale(1)}
    }  
`

    return(
        <NewStyle>
            <div>
                <img src = {`https://image.tmdb.org/t/p/w300/${props.img}`}className = {style.MovieImage} alt = ""/>
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>Genres: {props.genres}</p>
                <p>Vote Average: {props.vote}</p>
                <a href = "https://www.youtube.com/watch?v=naQr0uTrH_s" target = "_blank"className = {style.Trailer}>Trailer</a>
            </div>
        </NewStyle>
    )
}
export default movieDescription

