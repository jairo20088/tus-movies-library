import React from 'react';
import style from './Movie.module.css';
import imageNotFound from '../../assets/imageNotFound.png'

class movie extends React.Component {
    state = {fail:true}

    render(){
        const image = `https://image.tmdb.org/t/p/w300${this.props.image}`;
        const defaultImage = imageNotFound
        return (
            <div className = {style.Movie} onClick = {this.props.clicked}>
                <img src = {this.state.fail?image:defaultImage} onError = {(e)=>{
                    this.setState({fail:false})
                }} alt = {this.props.alt}/>
            </div>
        )
    }
}
export default movie