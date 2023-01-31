import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Projeto from '../components/Projeto/Projeto'

import '../styles/projetos.scss'


function Projetos() {
    return (
        <div className='container-projetos'>
            
            <Navbar />

            <div className='projetos-content'>
                
                <span className='projetos-title'>Projetos</span>
                <span className='projetos-call'>Cultura, Arte, Tecnologia e Sociedade.</span>
                <span className='projetos-text'>Facilitar o acesso a diferentes áreas do conhecimento e da sociedade é um dos maiores objetivos do Projeto Herbert de Souza.</span>
                
                <span className='projetos-title'>O que são nossos projetos?</span>

                <span className='projetos-text'>
                    São trabalhos planejados e montados para facilitar o acesso a cultura, arte, tecnologia e movimentos sociais, além de incentivar o pensamento crítico e novas áreas do conhecimento.
                </span>

                <span className='projetos-text'>O acesso a informação deve ser de todos, para todos.</span>

                <span className='projetos-title'>Nossos Projetos</span>
                <span className='projetos-text'>Confira alguns projetos do Herbert:</span>

                <div className='projetos-area'>
                    <Projeto nome="Educação" color="blue" status="Ativo" conteudo={["Pré-Vestibular", "Pré-Técnico"]}/>
                    <Projeto nome="Tecnologia" color="red" status="Em breve" conteudo={["Introdução a Computação", "Desenvolvimento Web", "Introdução a Algoritmos", "Hacking Básico"]}/>
                    <Projeto nome="Saúde" color="green" status="Em breve" conteudo={["Exercícios Físicos", "Ioga", "Esportes"]}/>
                    <Projeto nome="Arte" color="purple" status="Pausado" conteudo={["Pintura", "Cerâmica", "Grafite"]}/>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Projetos