import React from 'react';
import NavItem from './NavItem/NavItem';
import {connect} from 'react-redux';
import * as action from '../../store/action/index'
import  './NavItems.module.css';

const navItems  = props =>{
    const genreList = props.genre.map((el,index) =>{
        return (
            <NavItem 
                clicked = {()=>{}/* props.onClickedLink(el.id,props.page) */}
                key={index} 
                link = {`/${el.name}`}>{el.name}</NavItem>
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
const mapStateToProps = state =>{
    return {
        page: state.movie.page,
    }
}

const mapDispatchToProps  = dispatch =>{
    return{
        /* onClickedLink : (id,page)=>dispatch(action.getMoviesLink(id,page)) */
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(navItems)