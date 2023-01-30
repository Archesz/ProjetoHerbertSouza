import React from 'react'

import '../styles/home.scss'

import homeImg from '../assets/Imagens/livroNotebook.png'
import Beneficio from '../components/Beneficio/Beneficio'

/* Icones */
import {FaChalkboardTeacher, FaUniversity, FaPaintBrush, FaPython} from 'react-icons/fa'
import {MdOutlineSupportAgent} from 'react-icons/md'
import {BiDna} from 'react-icons/bi'
import {GiHealthNormal, GiBaobab} from 'react-icons/gi'

/* Imagens */
import unicamp from '../assets/Universidades/unicamp.png'
import usp from '../assets/Universidades/usp.png'
import unesp from '../assets/Universidades/unesp.png'
import federal from '../assets/Universidades/federal.png'
import cotuca from '../assets/Universidades/cotuca.png'
import enem from '../assets/Universidades/enem.png'

/* Componentes */
import Navbar from '../components/Navbar/Navbar'
import Depoimentos from '../components/Depoimento/Depoimentos'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div className='container-home'>
            
            <Navbar />

            <div className='hometop'>

                <div className='hometop-content'>
                    <span className='citation'>"Pela difusão do pensamento crítico"</span>

                    <span className='title'>A educação é o nosso maior instrumento de luta. </span>
                    <span className='title'>Venha Lutar conosco!</span>

                    <span className='subtitle'>Prezamos por um ensino, educação e convivência de qualidade para que juntos possamos conquistar nossos espaços</span>

                    <div className='hometop-buttons'>
                        <Button text="Matricula" estilo="full small responsive"/>
                        <Button text="Conhecer" estilo="outline small responsive"/>
                    </div>
                </div>

                <div className='hometop-img'>
                    <img src={homeImg} alt="" />
                </div>

            </div>

            <div className='hometopmid'>
                
                <div className='hometopmid-content'>
                    <span className='title'>Vamos te ajudar a lutar pelo seu lugar!</span>
                    <span className='resume'>Entre em um ambiente saúdavel e inspirador, que te prepara para muito mais que uma prova.</span>

                    <Button text="Como Funciona?" estilo="invert long self-center mb-4"/>

                    <Beneficio titulo="Educação Humanizada" icone={<FaChalkboardTeacher />} texto="Gostamos de valorizar as particularidades, debates e a criação de um ambiente não competitivo entre nossos estudantes, garantindo qualidade de educação e de convivência"/>
                    <Beneficio titulo="Suporte" icone={<MdOutlineSupportAgent />} texto="Oferecer todo o suporte disponível para os estudantes, desde materiais de apoio e estudo, conteúdos extras, monitorias, plantões, aulas presenciais e gravadas, e muito mais!"/>
                    <Beneficio titulo="Adaptabilidade" icone={<BiDna />} texto="O ensino deve ser adaptado e atualizado conforme as demandas da sociedade. Temos liberdade para utilizar diferentes ferramentas, métodos e integrações tecnologicas para auxiliar os estudantes."/>

                </div>

            </div>

            <div className='homemid'>
                <div className='homemid-content'>
                    <span className='homemid-call'>Seu futuro, nossa história.</span>
                    <span className='homemid-title'>Seu <span className='red'>lugar</span> é na <span className='red'>universidade!</span></span>
                    <span className='homemid-resume'>
                        O Projeto Herbert de Souza busca muito mais do que apenas
                        aprovação no vestibular. Buscamos incentivar o pensamento e senso crítico nos estudantes, 
                        fornecendo as ferramentas para que possam buscar seus objetivos!
                    </span>
                    <span className='homemid-call'>Nosso lugar é aqui:</span>

                    <div className='universidades-logos'>
                        <div className='field-universidade'><img className='logo-universidade' src={unicamp} alt="" /></div>
                        <div className='field-universidade'><img className='logo-universidade' src={usp} alt="" /></div>
                        <div className='field-universidade'><img className='logo-universidade' src={unesp} alt="" /></div>
                        <div className='field-universidade'><img className='logo-universidade' src={federal} alt="" /></div>
                        <div className='field-universidade'><img className='logo-universidade' src={cotuca} alt="" /></div>
                        <div className='field-universidade'><img className='logo-universidade' src={enem} alt="" /></div>
                    </div>

                    <span className='homemid-scall'>E muito mais.</span>

                    <span className='homemid-scall'>Nossa história é desenhada por lutas e objetivos extensos, onde cada estudante, professor ou colaborador escreve uma nova página sobre o futuro do projeto.</span>

                    <Button text="Conhecer" estilo="small outline red self-center mt-2"/>

                    <span className='homemid-cite'>"Uma história só termina quando quem conta diz que terminou."</span>
                </div>
            </div>

            <div className='homebotmid'>
                
                <div className='homebotmid-content'>
                    <span className='homebotmid-call'>Muito mais do que só um preparatório</span>
                    <span className='homebotmid-title'>Tecnologia, conhecimento e cultura para todos!</span>
                    <span className='homebotmid-resume'>
                        Não somos apenas um curso preparatório para vestibulares e vestibulinhos, 
                        queremos levar e facilitar o acesso ao conhecimento para todos!
                    </span>

                    <span className='homebotmid-resume'>
                        Para isso, estamos em constante desenvolvimento de projetos que facilitem essa missão.
                    </span>

                    <div className='projetos-icons'>
                        <div className='projeto-icon'>
                            <FaUniversity className='icon'/> 
                            <span className='projeto-label'>Vestibular</span>
                        </div>
                        <div className='projeto-icon'>
                            <FaPython className='icon'/>
                            <span className='projeto-label'>Programação</span>
                        </div>
                        <div className='projeto-icon'>
                            <FaPaintBrush className='icon'/>
                            <span className='projeto-label'>Arte</span>
                        </div>
                        <div className='projeto-icon'>
                            <GiHealthNormal className='icon'/>
                            <span className='projeto-label'>Sáude</span>
                        </div>
                    </div>

                    <Button text="Projetos" estilo="small full mt-4 self-center"/>
                </div>

            </div>

            <div className='homebot'>
                
                <div className='homebot-content'>
                    <span className='homebot-call'>Herbert Baobá</span>
                    <GiBaobab className="homebot-icon"/>
                    <span className='homebot-title'>As raízes do passado fortalecem nosso futuro!</span>
                    <span className='homebot-sub'>Algumas sementes que já passaram por aqui: </span>

                    <Depoimentos />
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home