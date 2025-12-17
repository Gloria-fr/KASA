import '../styles/Banner.scss'

// 接收 props: image (图片路径), text (显示的文字, 可选)
function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Banner" className="banner-img" />
            <div className="banner-overlay"></div>
            {/* 只有当 text 存在时，才显示 h1 (首页显示，About页不显示) */}
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    )
}

export default Banner