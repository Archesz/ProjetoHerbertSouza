import React from 'react'
import './Projeto.scss'

function Projeto(props) {
    return (
        <div className='projeto-containter'>
            <div className='projeto-header'>
                <div className='icone'></div>
                
                <div className={`info ${props.color}`}>
                    <span className='info-label'>Trilha</span>
                    <span className='info-name'>{props.nome}</span>
                </div>

                <div className='tag'>{props.status}</div>
            </div>

            <div className='projeto-body'>
                {props.conteudo.map((conteudo) => {
                    return(
                        <span className='conteudo'>{conteudo}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Projeto