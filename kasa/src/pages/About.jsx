import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import '../styles/About.scss' // 别忘了给这个页面容器写样式

// 导入山脉图片 (记得放一张图进 assets，名字自己定)
import aboutBanner from '../assets/banner2.png' 

// 定义 4 条数据
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
            {/* 1. Banner：没有 text 属性，所以只有图片 */}
            <Banner image={aboutBanner} />

            {/* 2. 循环生成 4 个 Collapse */}
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