import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../styles/About.scss' 


import aboutBanner from '../assets/banner2.png' 

const aboutData = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
    }
]

function About() {
    return (
        <div className="about">
            {/* Banner：no text */}
            <Banner image={aboutBanner} />

            {/* 4 */}
            <div className="about-container">
                {aboutData.map((item, index) => (
                    <Collapse 
                        key={index} 
                        title={item.title} 
                        content={item.content} 
                    />
                ))}
            </div>
        </div>
    )
}

export default About