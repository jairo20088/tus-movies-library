import React from 'react';
import style from './SideMenu.module.css'
import NavItems from '../NavItems/NavItems';


const sideMenu = props =>{
    let openOrClose;
    
    if (props.shows){
        openOrClose =[style.SideMenu, style.CloseSideMenu]
    } else {
        openOrClose =[style.SideMenu, style.OpenSideMenu]
    }
    
    return (
        <div className = {openOrClose.join(' ')} onClick = {props.clicked}>
            <p className = {style.X} ><i className="fas fa-times"></i></p>
            <NavItems/>
        </div>
    )

}
export default sideMenu