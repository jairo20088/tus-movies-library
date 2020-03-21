import React,{Component} from 'react';
import style from './Navbar.module.css';
import * as action from '../../store/action/index';
import {connect} from 'react-redux';


import NavItems from '../../components/NavItems/NavItems';
import Search from '../../components/SearchBar/SearchBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Backdrop from '../../components/Backdrop/Backdrop';
import SideMenu from '../../components/SideMenu/SideMenu';


class Navbar extends Component{

    render(){
        return (
            <nav className = {style.Navbar}>
                <div className = "Logo">TusMoviesLibrary</div>    
                <Search/>
                <div className = {style.topItems}>
                    <NavItems/>
                </div>
                <BurgerMenu clicked = {this.props.displaySideDrawer}/>

                <Backdrop 
                    show = {this.props.showBackDrop}
                    clicked = {this.props.hideBackdropHandler}/> 

                <SideMenu 
                    shows = {this.props.showNav} 
                    clicked = {this.props.displaySideDrawer}/> 
            </nav>
        )
    } 
}  
const mapStateToProps = state =>{  
    return {
        showNav : state.nav.showNav,
        showBackDrop: state.nav.showBackDrop,
    }  
}
const mapDispatchToProps = dispatch =>{
    return {
        displaySideDrawer: ()=> dispatch(action.displaySideDraw()),
        hideBackdropHandler: ()=>dispatch(action.hideBackdrop())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)