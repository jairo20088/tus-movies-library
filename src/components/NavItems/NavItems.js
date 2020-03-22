import React from 'react';
import NavItem from './NavItem/NavItem';
import  './NavItems.module.css';

const navItems  = props =>{

    return (
        <React.Fragment>
            <NavItem link = '/popular' >Most popular</NavItem>
             <NavItem link = '/top_rated' >Most rated</NavItem>
            <NavItem link = '/' >More</NavItem> 
        </React.Fragment>
    )

}
export default navItems