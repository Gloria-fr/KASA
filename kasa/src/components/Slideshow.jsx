import { useState } from 'react'
import '../styles/Slideshow.scss'
import arrowLeft from '../assets/arrow.png' 

function Slideshow({ pictures }) {
    // current pic index 
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    // nextSlide 
    const nextSlide = () => {
        // last slide  (length - 1)    first slide (0)
        // otherwise +1
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // prevSlide
    const prevSlide = () => {
        // first slide (0) last slide  (length - 1)
        // otherwise -1
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slideshow">
            <img src={pictures[current]} alt="logement" className="slide-image" />
            {length > 1 && (
                <>
                    {/* left */}
                    <img 
                        src={arrowLeft} 
                        alt="Previous" 
                        className="arrow arrow-left" 
                        onClick={prevSlide}
                    />
                    
                    {/* right (turn 180 CSS ) */}
                    <img 
                        src={arrowLeft} 
                        alt="Next" 
                        className="arrow arrow-right" 
                        onClick={nextSlide}
                    />

                    {/* page*/}
                    <span className="slide-counter">
                        {current + 1} / {length}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slideshow