import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import './App.css'

function App() {
  return (
    <div>
      {/* Routes 是路由容器，Route 是具体的规则 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" 意思是“匹配所有”，用来做 404 页面 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
