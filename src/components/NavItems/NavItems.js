import React from 'react';
import NavItem from './NavItem/NavItem';
import  './NavItems.module.css';

const navItems  = props =>{
    const genreList = props.genre.map((el,index) =>{
        return (
            <NavItem key={index} link = {`/${el.name}`}>{el.name}</NavItem>
        )

    })
    return (
        <React.Fragment>
            <NavItem link = '/popular' >Most popular</NavItem>
             <NavItem link = '/top_rated' >Most rated</NavItem>
             <NavItem link = '/upcoming' >Upcoming</NavItem>
             {genreList}
            {/* <NavItem link = '/' >More</NavItem>  */}
        </React.Fragment>
    )
}
export default navItems