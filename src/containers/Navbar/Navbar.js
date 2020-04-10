import React,{Component} from 'react';
import style from './Navbar.module.css';
import * as action from '../../store/action/index';
import {connect} from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import SideMenu from '../../components/SideMenu/SideMenu';
import Backdrop from '../../components/Backdrop/Backdrop';
import {withRouter} from 'react-router'

class Navbar extends Component{

    /* componentDidMount(){
        this.props.onGetListGenre();
    } */


    render(){
        return (
            <nav className = {style.Navbar}>
                <div className = "Logo">TusMoviesLibrary</div>   

                <SearchBar 
                    changed = {(e)=>this.props.onGetUserInputHandler(e.target.value)}
                    value = {this.props.userInput}
                    clicked = {()=> {
                        this.props.onSearchMovie(this.props.currentPage,this.props.userInput)
                        this.props.history.push(`/${this.props.userInput}`)
                        
                    }}/>
                <BurgerMenu clicked = {this.props.showMenu}/>
                <SideMenu  
                        clicked = {this.props.close} 
                        genre = {this.props.genre?this.props.genre:[{name:'jose'},{name:'hola'}]}
                       />
                <Backdrop show = {this.props.backdrop}/>
            </nav>
        )
    } 
}  
const mapStateToProps = state =>{
    return {
        userInput :state.movie.userInput,
        currentPage: state.movie.page,
        genre:state.movie.genre
        
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        displaySideDrawer: ()=> dispatch(action.displaySideDraw()),
        onGetUserInputHandler: (text) => dispatch(action.getUserInput(text)),
        onSearchMovie: (page,input)=>dispatch(action.searchMovie(page,input))
       /*  onGetListGenre: ()=>dispatch(action.getListGenre()) */
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar))