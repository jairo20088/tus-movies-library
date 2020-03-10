import React from 'react';
import style from './BurgerMenu.module.css'
const burgerMenu = (props) =>{
    
    return <div className = {style.BurgerMenu} onClick = {props.clicked}><i className="fas fa-bars"></i></div>

}
export default burgerMenu