// src/components/AppRouter.jsx

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import Logement from '../pages/Logement'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter