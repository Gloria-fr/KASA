import { Link } from 'react-router-dom'
// 这里先预留着样式文件的引用，虽然我们还没写
import '../styles/Error.scss' 

function Error() {
    return (
        <div className="error-page">
            {/* 1. 巨大的 404 号码 */}
            <h1 className="error-title">404</h1>
            
            {/* 2. 错误提示文字 */}
            <span className="error-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </span>
            
            {/* 3. 返回首页的链接 (必须用 Link，不能用 a 标签) */}
            <Link to="/" className="error-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error