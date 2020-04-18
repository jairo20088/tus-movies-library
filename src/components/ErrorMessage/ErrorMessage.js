import React from 'react';
import style from './ErrorMessage.module.css';
const errorMessage = props =>{


    return (
        <div className = {style.ErrorMessage}>
            <h2>{props.error}</h2>
        </div>
    )
}
export default errorMessage