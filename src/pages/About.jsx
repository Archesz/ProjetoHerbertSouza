import React from 'react'

import '../styles/about.scss'

/* Fotos */
import about1 from '../assets/Imagens/about1.png'
import about2 from '../assets/Imagens/about2.png'

/* Componentes */
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Avatar from '../components/Avatar/Avatar'

/* Data */

import Professores from '../data/Professores.json'
const professores = Professores["Professores"]

function About() {
    return (
        <div className='container-about'>
            
            <Navbar />

            <div className='about-content'>

                <span className='title'>Sobre Nós</span>
                <span className='about-title'>Quem somos nós?</span>
                <span className='about-text'>
                    Somos um projeto sem fins lucrativos que promove um ensino de qualidade para a comunidade. 
                    Dentre muitas frentes, o projeto tem foco na preparação para estudantes que desejam ingressar em
                    universidades e colégios técnicos. Buscamos também facilitar o acesso a cultura, 
                    tecnologia e arte através de eventos e debates promovidos por nós para vocês.
                </span>

                <img src={about1} alt="" className='about-img'/>

                <span className='about-title'>Nossos Pilares</span>

                <div className='about-pilar'>
                    <span className='pilar-title'>Ensinar</span>
                    <span className='pilar-text'>Somos especialistas em ensinar e amamos o que fazemos, mantendo o respeito e aprendendo com nossos alunos também.</span>
                </div>

                <div className='about-pilar'>
                    <span className='pilar-title'>História</span>
                    <span className='pilar-text'>O projeto pensa no futuro, mas para isso, precisamos fortalecer as raízes do nosso passado, transmitindo nossa história para os que passam por nós.</span>
                </div>

                <div className='about-pilar'>
                    <span className='pilar-title'>Respeito</span>
                    <span className='pilar-text'>O respeito e a união entre todos do projeto é o que mantém o Herbert de pé! Para isso, tratamos o respeito como ideia principal e enfatizamos sua importância.</span>
                </div>

                <div className='about-pilar'>
                    <span className='pilar-title'>Interdisciplinaridade</span>
                    <span className='pilar-text'>Tratamos as diferentes áreas do conhecimento como grupos conectados entre si, buscando conectar diferentes inteligências para atingirmos os objetivos.</span>
                </div>

                <img src={about2} alt="" className='about-img'/>

                <span className='about-title' id='funcionamento'>Como funcionamos?</span>

                <div className='about-work'>
                    <span className='work-title'>A estrutura</span>
                    <span className='work-text'>
                        Atualmente o projeto conta com três salas com capacidade para 50 alunos por sala, funcionando durante os três períodos (manhã, tarde e noite). 
                    </span>
                    <span className='work-text'>
                        Além das salas de aula, temos sala de convivência onde os estudantes podem descansar, conversar e estudar. Temos área verde, cozinha e secretaria
                    </span>
                </div>

                <div className='about-work'>
                    <span className='work-title'>As Aulas</span>

                    <span className='work-text'>
                        Durante cada periodo, os estudante assistem 3 aulas de 1h15 cada, com um intervalo de 15 minutos após a primeira aula. A grade de aulas é montada de forma a não sobrecarregar os estudantes e maximizar sua qualidade de estudo.
                    </span>
                    
                    <span className='work-text'>
                        Durante as aulas, os professores tem liberdade de utilizarem diferentes abordagens, como aulas demonstrativas, slides, exercícios, simulados, entre outros.
                    </span>

                    <span className='work-text'>
                        O curriculo de ensino é atualizado e pode ser conferido <a href="./">aqui</a>.
                    </span>
                </div>

                <div className='about-work'>
                    <span className='work-title'>Tecnologia</span>

                    <span className='work-text'>
                        O projeto conta com uma iniciativa de integração tecnologica que visa aumentar o desempenho dos estudantes através de tecnologias como aplicativos, inteligência artificial e técnicas de gamificação.
                    </span>
                    <span className='work-text'>
                        No momento, a plataforma Herbertech e o aplicativo do projeto esta em desenvolvimento e pode ser conferida em nosso <a href="./">github</a>.
                    </span>
                </div>

                <span className='about-title'>Equipe</span>
                <span className='about-text'>Nossa equipe é composta por professores voluntários e bolsistas que estão dispostos a ajudar todos.</span>

                <div className='about-team'>
                    <div className='team-title'>Coordenação e Infraestrutura</div>

                    <div className='team'>
                        {professores["Infraestrutura"].map((pessoa) => {return(<Avatar name={pessoa}/>)})}
                    </div>
                </div>

                <div className='about-team'>
                    <div className='team-title'>Exatas</div>

                    <div className='team'>
                        {professores["Exatas"].map((pessoa) => {return(<Avatar name={pessoa}/>)})}
                    </div>
                </div>

                <div className='about-team'>
                    <div className='team-title'>Natureza</div>

                    <div className='team'>
                        {professores["Natureza"].map((pessoa) => {return(<Avatar name={pessoa}/>)})}
                    </div>
                </div>

                <div className='about-team'>
                    <div className='team-title'>Humanas</div>

                    <div className='team'>
                        {professores["Humanas"].map((pessoa) => {return(<Avatar name={pessoa}/>)})}
                    </div>
                </div>

                <div className='about-team'>
                    <div className='team-title'>Linguagens</div>

                    <div className='team'>
                        {professores["Linguagens"].map((pessoa) => {return(<Avatar name={pessoa}/>)})}
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default About