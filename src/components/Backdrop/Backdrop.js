import React from 'react';
import style from './Backdrop.module.css'


const backdrop = (props)=>{

    let displayBackdrop;
    if(props.show){
        displayBackdrop = [style.Backdrop,style.Display]
    } else{
        displayBackdrop = [style.Backdrop]
    }
    return <div className = {displayBackdrop.join(' ')} onClick = {props.clicked}>{props.children}</div>

}
export default backdrop