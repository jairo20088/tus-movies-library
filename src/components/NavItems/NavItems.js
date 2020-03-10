import React from 'react';
import NavItem from './NavItem/NavItem';
import  './NavItems.module.css';

const navItems  = props =>{

    return (
        <React.Fragment>
            <NavItem link = '/' >Most popular</NavItem>
            <NavItem link = '/' >Most rated</NavItem>
            <NavItem link = '/' >More</NavItem>
        </React.Fragment>
    )

}
export default navItems