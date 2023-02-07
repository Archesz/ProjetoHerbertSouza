import React, { useState } from 'react'
import './Depoimentos.scss'

const depoimentos = [
    {"Nome": "João Vitor", "Foto": "jovi", "Curso": "Ciência da Computação", "Universidade": "Unicamp", "Depoimento": "Eu sempre tive dificuldades com matemática e física, mas o cursinho me ajudou a compreender essas matérias de uma maneira mais clara e fácil. Agora eu posso dizer que me sinto confiante para enfrentar qualquer desafio na faculdade."},
    {"Nome": "Barbara Cristina", "Foto": "barbara", "Curso": "Medicina", "Universidade": "USP", "Depoimento": "Antes de frequentar o cursinho, eu tinha dúvidas sobre qual carreira escolher. Com a ajuda dos professores e dos meus colegas de turma, pude descobrir qual área eu realmente tinha afinidade e interesse. Hoje, estou muito feliz e realizada com minha escolha."},
    {"Nome": "Silas Eduardo", "Foto": "marcia", "Curso": "Ciências Sociais", "Universidade": "Unicamp", "Depoimento": "O cursinho me deu a oportunidade de me preparar para o vestibular e me destacar entre os outros candidatos. Além disso, fiz muitas amizades e aprendi muito com as aulas e os debates em grupo."},
    {"Nome": "Samuel Augusto", "Foto": "samuca", "Curso": "Geologia", "Universidade": "Unicamp", "Depoimento": "Eu sempre tive dificuldades para me expressar e me comunicar de forma clara e efetiva. Com as aulas de redação e oratória do cursinho, eu consegui superar esse medo e hoje sou capaz de me expressar de forma confiante e coerente em qualquer situação."},
]

function Depoimentos() {

    const [counter, setCounter] = useState(0)
    
    const counters = ["counter_0", "counter_1", "counter_2", "counter_3", "counter_4"]
    function changeCounter(num){
        let count = document.querySelector(`#counter_${num}`);

        counters.map((c) => {
            let element = document.querySelector(`#${c}`)
            if(element.classList.contains("active")){
                element.classList.toggle("active");
            }
            return 0
        })

        count.classList.toggle("active")
        setCounter(num)
    }

    return (
        <div className={`depoimentos-container`}>

            <div className='depoimento-perfil'>
                <div className={`depoimento-foto ${depoimentos[counter]["Foto"]}`}></div>
                <div className='depoimento-infos'>
                    <span className='depoimento-nome'>{depoimentos[counter]["Nome"]}</span>
                    <span className='depoimento-curso'>{depoimentos[counter]["Curso"]}</span>
                    <span className='depoimento-universidade'>{depoimentos[counter]["Universidade"]}</span>
                </div>
            </div>

            <div className='depoimento-texto'>
                "{depoimentos[counter["Depoimento"]]}"
            </div>

            <div className='depoimentos-counter'>
                <div onClick={() => {changeCounter(0)}} className='counter active' id="counter_0"></div>
                <div onClick={() => {changeCounter(1)}} className='counter' id="counter_1"></div>
                <div onClick={() => {changeCounter(2)}} className='counter' id="counter_2"></div>
                <div onClick={() => {changeCounter(3)}} className='counter' id="counter_3"></div>
                <div onClick={() => {changeCounter(4)}} className='counter' id="counter_4"></div>
            </div>

        </div>
    )
}

export default Depoimentos