import { Link, NavLink } from 'react-router-dom'
// 如果你有 logo 图片，取消下面这行的注释并修改文件名
// import logo from '../assets/logo.svg' 

function Header() {
    return (
        <header className='kasa-header'>
            <div className='header-logo'>
                {/* 点击 Logo 返回首页 */}
                <Link to="/">
                    {/* 如果没有图片，先用文字代替 */}
                    <h1>KASA</h1> 
                    {/* 如果有图片，请用: <img src={logo} alt="Kasa Logo" /> */}
                </Link>
            </div>
            <nav className='header-nav'>
                {/* NavLink 会自动检测当前是否在这个页面，方便加下划线 */}
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Accueil
                </NavLink>
                
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header