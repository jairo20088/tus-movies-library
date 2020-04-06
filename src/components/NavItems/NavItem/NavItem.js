import React from 'react';
import {Link} from 'react-router-dom';


const NavItem  = (props) =>{

    return(
           
         <Link to = {props.link}>{props.children}</Link>
         
    )

}
export default NavItem