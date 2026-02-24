// src/components/Footer.jsx
import '../styles/Footer.scss' 
import logoWhite from '../assets/logoWhite.svg'

function Footer() {
    return (
        <footer className='kasa-footer'>
            <div className='footer-logo'>
                <img src={logoWhite} alt="Kasa"/>
            </div>
            <p className='footer-text'>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer