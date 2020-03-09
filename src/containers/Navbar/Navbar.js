import React from 'react';
import NavItem from '../../components/NavItem';
import Search from '../../components/SearchBar';
import style from './Navbar.module.css'
const navbar = (props)=>{


    return (
        <nav className = {style.Navbar}>
        
            <div className = "Logo">Logo</div>
            
            <Search/>

            <NavItem link = "/">item- 1</NavItem>
            <NavItem link = "/">item- 1</NavItem>
            <NavItem link = "/">item- 1</NavItem>
            <NavItem link = "/">item- 1</NavItem>
        </nav>
    )

}
export default navbar