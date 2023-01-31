import React from 'react'
import '../styles/contact.scss'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import {BiMapAlt, BiTimeFive } from 'react-icons/bi'

function Contact() {
    return (
        <div className='container-contact'>
            
            <Navbar />

            <div className='contact-content'>

                <span className='contact-title'>Converse Conosco!</span>

                <span className='contact-text'>Tem dúvidas sobre o projeto? Gostaria de participar ou Sugerir novas ideias?</span>
                <span className='contact-text'>Entre em contato com a gente:</span>

                <div className='social-row'>
                    <FaFacebookF className='social'/>
                    <FaWhatsapp className='social'/>
                    <FaInstagram className='social'/>
                    <FaYoutube className="social"/>
                </div>

                <div className='contact-field'>

                    <div className='contact-row'><AiFillPhone className='contact-icone'/> (19) 98980-9272</div>
                    <div className='contact-row'><AiOutlineMail className='contact-icone'/>cursinhoherbert@gmail.com</div>
                    <div className='contact-row'><BiMapAlt className='contact-icone2'/>R. Dusolina Leone Tournieux, 249 - Parque Res. Vila União, Campinas - SP.</div>
                    <div className='contact-row'><BiTimeFive className='contact-icone2'/>Segunda a Sexta feira: 08:00 às 22:30 (Matrículas das 16h às 20h)</div>

                </div>

                <span className='contact-name'>Estamos aqui: </span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.198326739173!2d-47.12104704949066!3d-22.94292198491982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c836633d9479%3A0xf30972041c1f6da5!2sProjeto%20Hebert%20de%20Souza!5e0!3m2!1spt-BR!2sbr!4v1673977382246!5m2!1spt-BR!2sbr" title="Localização Herbert" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mapa'/>

            </div>

            <Footer />

        </div>
    )
}

export default Contact