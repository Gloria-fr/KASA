import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../assets/logements.json' 
import '../styles/Home.scss' 
import bannerImg from '../assets/banner.png'

function Home() {
    return (
        <div className="home">
            {/* Banner */}
            <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />

            {/* liste carte */}
            <div className="cards-container">
                {/* map */}
                {logements.map((item) => (
                    <Card 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        cover={item.cover} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Home