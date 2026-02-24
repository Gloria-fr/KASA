import { useState } from 'react'
import '../styles/Collapse.scss'
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