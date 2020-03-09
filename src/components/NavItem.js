import React from 'react';
import {NavLink} from 'react-router-dom'

const NavItem  = (props) =>{

    return(
        <NavLink 
            to ={props.link}
            >{props.children}</NavLink>
    )

}
export default NavItem