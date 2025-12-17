import { useState } from 'react'
import '../styles/Collapse.scss'
// 👇 确保你的 assets 文件夹里真的有这个 SVG 文件，名字要对应
import arrowIcon from '../assets/arrow.png' 

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse">
            <button className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                
                {/* 👇👇👇 这里改了！使用 img 标签显示引入的图标 */}
                <img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className={`collapse-arrow ${isOpen ? 'open' : ''}`} 
                />
            </button>

            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <div className="collapse-text">{content}</div>
            </div>
        </div>
    )
}

export default Collapse