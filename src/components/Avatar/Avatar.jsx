import React from 'react'
import './Avatar.scss'
import padrao from '../../assets/Pessoas/noFoto.png'

const professores = ["Jovi", "Carol"]

function Avatar(props){

    if(professores.includes(props.name) === false){
        return (
            <div className='avatar-container'>
                <img src={padrao} alt="" className='avatar-img'/>
                <span className='avatar-name'>{props.name}</span>
            </div> 
        )
    } else{
        return (
            <div className='avatar-container'>
                <img src={require(`../../assets/Pessoas/${props.name}.png`)} alt="" className='avatar-img'/>
                <span className='avatar-name'>{props.name}</span>
            </div>
        )
    }
}

export default Avatar