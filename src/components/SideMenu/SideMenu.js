import React from 'react';
import style from './SideMenu.module.css'
import NavItems from '../NavItems/NavItems';


const sideMenu = props =>{
   
    
    return (
        <div className = {style.SideMenu} >
            <p className = {style.X} ><i  onClick = {props.clicked} className="fas fa-times"></i></p>
            <NavItems genre = {props.genre}/>
        </div>
    )

}
export default sideMenu