import '../styles/Tag.scss' // 引入它的专属样式

function Tag({ text }) {
    return (
        <span className="tag">
            {text}
        </span>
    )
}

export default Tag