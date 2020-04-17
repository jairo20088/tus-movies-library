import React from 'react';
import style from './Search.module.css';

const search = (props) =>{

    return (
        <div className = {style.Search}>
            <i className="fas fa-search" onClick = {props.clicked}></i>
            <input
                type ="text"
                placeholder = "Search for movie"
                onChange = {props.changed}
                value = {props.value}></input>
        </div>
    )
}

export default search