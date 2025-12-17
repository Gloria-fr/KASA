// src/components/Footer.jsx
import '../styles/Footer.scss' // <--- 注意这里是两个点，去上一级找 styles
// 如果你有白色Logo，在这里引入，没有就先用文字
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