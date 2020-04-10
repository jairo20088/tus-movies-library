import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import Movies from './containers/Movies/Movies';
import {connect} from 'react-redux';
import Backdrop from './components/Backdrop/Backdrop';
import * as action from './store/action/index';
import style from './App.module.css';
import Description from './containers/Description/Description';

class App extends Component{
  
  render(){

    let openSideMenu;

    if(this.props.openMenu){
      openSideMenu = style.OpenMenu
    } else {
      openSideMenu = style.App
    }

    return (
      <BrowserRouter>
        <div className = {openSideMenu}>
          <Backdrop show = {this.props.showBackDrop} 
                    clicked = {this.props.hideBackdropHandler}/>
          <Navbar showMenu = {this.props.displaySideDrawer}
                  backdrop = {this.props.openMenu}
                  close = {this.props.displaySideDrawer}/>
          <Description/>
          
          <Switch>
            <Route  exact path = "/:moviesType" component = {Movies}/> 
            <Redirect to ="/popular" from ='/'/>
          </Switch>
         
        </div>
      </BrowserRouter>
      
    );

  }
    
}
 
const mapStateToProps = state =>{
  return {
    showBackDrop: state.movie.detail,
    openMenu: state.nav.showNav
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    hideBackdropHandler:() => dispatch(action.hideBackdrop()),
    displaySideDrawer: ()=> dispatch(action.displaySideDraw()),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
