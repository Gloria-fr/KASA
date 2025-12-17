import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../assets/logements.json' // 导入数据
import '../styles/Home.scss' 
import bannerImg from '../assets/banner.png'
// 引入图片 (确保路径对，或者先用网图字符串代替)
// import bannerImg from '../assets/banner-home.png' 
function Home() {
    return (
        <div className="home">
            {/* 1. 放置 Banner */}
            <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />

            {/* 2. 放置卡片列表 */}
            <div className="cards-container">
                {/* 使用 map 循环遍历数据，生成几十个卡片 */}
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