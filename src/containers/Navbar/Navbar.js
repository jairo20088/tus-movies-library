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
                <Search 
                    changed = {(e)=>this.props.onGetUserInputHandler(e.target.value)}
                    value = {this.props.userInput}
                    clicked = {()=>this.props.onSearchForMovieHandler(this.props.userInput)}/>

                <BurgerMenu clicked = {this.props.showMenu}/>
                <SideMenu clicked = {this.props.close}/>
                <Backdrop show = {this.props.backdrop}/>
            </nav>
        )
    } 
}  
const mapStateToProps = state =>{
    return {
        userInput :state.movie.userInput
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        displaySideDrawer: ()=> dispatch(action.displaySideDraw()),
        onGetUserInputHandler: (text) => dispatch(action.getUserInput(text)),
        onSearchForMovieHandler:(input)=>dispatch(action.searchForMovie(input))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)