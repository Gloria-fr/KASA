import { useParams, Navigate } from 'react-router-dom'
import logements from '../assets/logements.json'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'

import '../styles/Logement.scss' 
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

function Logement() {
    
    const { id } = useParams()
    const housing = logements.find(item => item.id === id)

    // 404
    if (!housing) {
        return <Navigate to="/404" replace />
    }

    // Data processing for display
    // Name split 
    const [firstName, lastName] = housing.host.name.split(' ')
    // Note [1, 2, 3, 4, 5]
    const ratingScale = [1, 2, 3, 4, 5]

    // Equipments
    const equipmentsList = (
        <ul className="equipments-list">
            {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    )

    return (
        <div className="logement-page">
            {/* Slideshow  */}
            <Slideshow pictures={housing.pictures} />

            {/* zone infomation */}
            <div className="logement-header">
                
                {/* left：title + site + tag */}
                <div className="logement-info">
                    <h1>{housing.title}</h1>
                    <p className="location">{housing.location}</p>
                    
                    <div className="tags-container">
                        {housing.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>

                {/* right：Name + Note */}
                <div className="logement-host-rating">
                    {/* Name */}
                    <div className="host-info">
                        <div className="host-name">
                            <span>{firstName}</span>
                            <span>{lastName}</span>
                        </div>
                        <img 
                            src={housing.host.picture} 
                            alt={housing.host.name} 
                            className="host-picture" 
                        />
                    </div>

                    {/* Note (map((5) ，if >= n) */}
                    <div className="rating">
                        {ratingScale.map((n) => (
                            <img 
                                key={n}
                                src={housing.rating >= n ? starActive : starInactive} 
                                alt="star" 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Collapses */}
            <div className="logement-collapses">
                <div className="collapse-item">
                    <Collapse title="Description" content={housing.description} />
                </div>
                <div className="collapse-item">
                    <Collapse title="Équipements" content={equipmentsList} />
                </div>
            </div>
        </div>
    )
}

export default Logement