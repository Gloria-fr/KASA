import { Link } from 'react-router-dom'
import '../styles/Error.scss' 

function Error() {
    return (
        <div className="error-page">
            <h1 className="error-title">404</h1>
            
            {/* Text error */}
            <span className="error-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </span>
            
            {/* return */}
            <Link to="/" className="error-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error