import React from 'react';
import NavItem from './NavItem/NavItem';
import {connect} from 'react-redux';
import style from './NavItems.module.css';
import * as action from '../../store/action/index'
import  './NavItems.module.css';

const navItems  = props =>{
    const genreList = props.genre.map((el,index) =>{
        return (
            <NavItem 
                urlClicked = {()=>props.onGetMovieById(1,el.id)}
                key={index} 
                link = {`/${el.name}`}>{el.name}</NavItem>
        )

    })
    return (
        <React.Fragment>
            <NavItem link = '/popular' >Most popular</NavItem>
             <NavItem link = '/top_rated' >Most rated</NavItem>
             <NavItem link = '/upcoming' >Upcoming</NavItem>
             <div className = {style.LinkContainer}>
                {genreList}
             </div>
             
            {/* <NavItem link = '/' >More</NavItem>  */}
        </React.Fragment>
    )
}
const mapStateToProps = state =>{
    return {
        page: state.movie.page,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onGetMovieById: (page,id)=> dispatch(action.getMoviesLink(page,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(navItems)