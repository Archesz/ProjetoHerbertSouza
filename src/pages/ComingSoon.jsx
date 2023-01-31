import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/global.scss'

function ComingSoon() {
    return (
        <div className='container-coming'>
            <Navbar />
            
            <div className='coming-content'>
                <span className='coming-text'>Essa página esta em construção, volte em breve :)</span>    
            </div>

            <Footer />
        </div>
    )
}

export default ComingSoon