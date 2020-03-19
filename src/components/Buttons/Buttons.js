import React from 'react';
import style from './Buttons.module.css';

const button = props =>{

    return(
        <div className = {style.Button}>
            <button disabled = {props.show} className = {style.Prev} onClick = {props.prev}>Prev</button>
            <button  className = {style.Next} onClick = {props.next}>Next</button>
        </div>
    )

}
export default button