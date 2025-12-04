// src/components/Footer.jsx
// 别忘了引入样式./styles/App.scss

function Footer() {
    return (
        <footer className='kasa-footer'>
            <div className='footer-logo'>
                <h2>KASA</h2>
            </div>
            <p className='footer-text'>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer  // <--- 关键！报错就是因为缺了这一行