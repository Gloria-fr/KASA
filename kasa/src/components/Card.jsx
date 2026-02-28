import { Link } from 'react-router-dom'
import '../styles/Card.scss'

function Card({ id, title, cover }) {
    return (
        <Link to={`/housing/${id}`} className="card">
            <img src={cover} alt={title} />
            <div className="card-overlay"></div>
            <h3>{title}</h3>
        </Link>
    )
}

export default Card