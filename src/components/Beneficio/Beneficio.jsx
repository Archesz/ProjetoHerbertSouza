import React from 'react'
import './Beneficio.scss'

function Beneficio(props) {
    return (
        <div className='beneficio-container'>
            <div className='beneficio-icon'>{props.icone}</div>

            <span className='beneficio-title'>{props.titulo}</span>
            <span className='beneficio-text'>
                {props.texto}
            </span>
        </div>
    )
}

export default Beneficio