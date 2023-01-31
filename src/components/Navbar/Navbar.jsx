import React, {useState} from 'react'
import './Navbar.scss'

import logo from '../../assets/logos/logoMenu.png'

import {AiOutlineMenu} from 'react-icons/ai'
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaDiscord} from 'react-icons/fa'


window.onscroll = function(){
    let posY = window.scrollY;
    let menu = document.querySelector("#menu");
    
    if(posY >= 40){
        menu.style.marginTop = '0px'
    } else if(posY < 60){
        menu.style.marginTop = '0px'
    } 

    else if(posY >= 700 && posY < 1200){

        menu.style.backgroundColor = "#3a3a3a"

    }
    
    // console.log(`Posição Y: ${window.scrollY}`)
}

function goToPage(page){
    if(page === "Home"){
        window.location.assign('./')
    }

    if(page === "About"){
        window.location.assign('./historia')
    }

    if(page === "Projetos"){
        window.location.assign('./projetos')
    }

    if(page === "Contato"){
        window.location.assign('./contato')
    }

    if(page === "Matricula"){
        window.open("https://forms.gle/CNXW6FC1GPRG5aKz5", "_blank")
    }
}

function Navbar() {

    const [statusMenu, setStatusMenu] = useState("hide")

    function openMenu(){
        let mobile = document.querySelector("#menu-mobile")
        let menu = document.querySelector("#menu-mobile-items")
        
        if(statusMenu === "hide"){
    
            mobile.classList.toggle("animation-extend")
            
            setTimeout(() => {
                mobile.classList.toggle("menu-extend")
            }, 390);

            setTimeout(() => {
                menu.classList.toggle("menu-view")
                menu.classList.toggle("menu-noview")

            }, 400);
    
            setStatusMenu("show")
        } else{
            mobile.classList.toggle("animation-hide")

            setTimeout(() => {
                mobile.classList.toggle("menu-hide")
            }, 390);

            setTimeout(() => {
                menu.classList.toggle("menu-view")
                menu.classList.toggle("menu-noview")

            }, 400);
        }
    
    }

    return (
        <div className='menu-container' id='menu'>
            
            <div className='menu-padding'>

                <div className='logo'>
                    <img src={logo} alt="Logo do Projeto Herbert de Souza" className='menu-logo' onClick={() => {goToPage("Home")}}/>
                </div>

                <div className='menu-items'>
                    <a className='menu-item' href="./">Home</a>
                    <a className='menu-item' href="./historia">História</a>
                    <a className='menu-item' href="./projetos">Projetos</a>
                    <a className='menu-item' href="./contato">Contato</a>
                    <a className='menu-item' href="./inscricao">Inscrição</a>
                </div>


                <AiOutlineMenu className="menu-items-mobile" onClick={openMenu}/>

            </div>

            <div className='menu-mobile' id="menu-mobile">

                <div className='menu-mobile-items menu-noview' id="menu-mobile-items">
                    <span className='menu-item' onClick={() => {goToPage("Home")}}>Home</span>
                    <span className='menu-item' onClick={() => {goToPage("About")}}>História</span>
                    <span className='menu-item' onClick={() => {goToPage("Projetos")}}>Projetos</span>
                    <span className='menu-item' onClick={() => {goToPage("Contato")}}>Contato</span>
                    <span className='menu-item' onClick={() => {goToPage("Matricula")}}>Inscrição</span>
                </div>

                <div className='menu-social' id='menu-social'>
                    <FaFacebookF className='menu-icon'/> 
                    <FaInstagram className='menu-icon'/>
                    <FaYoutube className='menu-icon'/>
                    <FaWhatsapp className='menu-icon'/>
                    <FaDiscord className='menu-icon'/>
                </div>


            </div>
        </div>
    )
}

export default Navbar