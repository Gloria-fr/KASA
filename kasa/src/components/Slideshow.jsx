import { useState } from 'react'
import '../styles/Slideshow.scss'
// 我们可以复用之前 Collapse 里的箭头图标 (向左的箭头)
// 如果你想要向右的，我们可以用 CSS 把它旋转 180度
import arrowLeft from '../assets/arrow.png' 

function Slideshow({ pictures }) {
    // 1. 定义状态：当前显示第几张图 (索引从 0 开始)
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    // 2. 下一张的逻辑 (无限循环)
    const nextSlide = () => {
        // 如果当前是最后一张 (length - 1)，就跳回第一张 (0)
        // 否则就 +1
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // 3. 上一张的逻辑 (无限循环)
    const prevSlide = () => {
        // 如果当前是第一张 (0)，就跳到最后一张 (length - 1)
        // 否则就 -1
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slideshow">
            {/* 显示当前图片 */}
            <img src={pictures[current]} alt="logement" className="slide-image" />

            {/* 只有当图片数量大于 1 时，才显示箭头和页码 */}
            {length > 1 && (
                <>
                    {/* 左箭头 */}
                    <img 
                        src={arrowLeft} 
                        alt="Previous" 
                        className="arrow arrow-left" 
                        onClick={prevSlide}
                    />
                    
                    {/* 右箭头 (复用左箭头图标，用 CSS 旋转) */}
                    <img 
                        src={arrowLeft} 
                        alt="Next" 
                        className="arrow arrow-right" 
                        onClick={nextSlide}
                    />

                    {/* 页码计数器 (例如 1/3) */}
                    <span className="slide-counter">
                        {current + 1} / {length}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slideshow