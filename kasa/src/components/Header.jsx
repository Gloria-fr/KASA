import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg' 
import '../styles/Header.scss'

function Header() {
    return (
        <header className='kasa-header'>
            <div className='header-logo'>
                {/* 点击 Logo 返回首页 */}
                <Link to="/">
                  <img src={logo} alt="Kasa Logo" />
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