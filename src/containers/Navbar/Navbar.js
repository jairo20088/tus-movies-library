import React,{Component} from 'react';
import style from './Navbar.module.css';
import * as action from '../../store/action/index';
import {connect} from 'react-redux';
import Search from '../../components/SearchBar/SearchBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import SideMenu from '../../components/SideMenu/SideMenu';
import Backdrop from '../../components/Backdrop/Backdrop';


class Navbar extends Component{

    render(){
        return (
            <nav className = {style.Navbar}>
                <div className = "Logo">TusMoviesLibrary</div>    
                <Search/>
                <BurgerMenu clicked = {this.props.showMenu}/>
                <SideMenu clicked = {this.props.close}/>
                <Backdrop show = {this.props.backdrop}/>
            </nav>
        )
    } 
}  

const mapDispatchToProps = dispatch =>{
    return {
        displaySideDrawer: ()=> dispatch(action.displaySideDraw())
    }
}
export default connect(null,mapDispatchToProps)(Navbar)