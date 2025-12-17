import { useParams, Navigate } from 'react-router-dom'
import logements from '../assets/logements.json'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'

// 引入样式和星星图标
import '../styles/Logement.scss' 
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

function Logement() {
    // 1. 获取 URL 中的 ID
    const { id } = useParams()
    // 2. 查找对应数据
    const housing = logements.find(item => item.id === id)

    // 3. 如果找不到 ID，跳转 404
    if (!housing) {
        return <Navigate to="/404" replace />
    }

    // 4. 处理数据逻辑
    // 房东名字拆分 (为了换行)
    const [firstName, lastName] = housing.host.name.split(' ')
    // 评分数组 [1, 2, 3, 4, 5]
    const ratingScale = [1, 2, 3, 4, 5]

    // 5. 处理 Equipments 列表 (把数组转成 JSX 列表)
    const equipmentsList = (
        <ul className="equipments-list">
            {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    )

    return (
        <div className="logement-page">
            {/* 顶部轮播图 */}
            <Slideshow pictures={housing.pictures} />

            {/* 中间信息区域 (标题、标签、房东、评分) */}
            <div className="logement-header">
                
                {/* 左侧：标题 + 地点 + 标签 */}
                <div className="logement-info">
                    <h1>{housing.title}</h1>
                    <p className="location">{housing.location}</p>
                    
                    <div className="tags-container">
                        {housing.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>

                {/* 右侧：房东信息 + 星星评分 */}
                <div className="logement-host-rating">
                    {/* 房东 */}
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

                    {/* 评分 (循环 5 次，判断当前分数是否 >= n) */}
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

            {/* 底部折叠区域 (Description 和 Équipements) */}
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