// src/App.jsx

import React from 'react' // 只要用了JSX，引入React总是没错的
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'


function App() {
  return (
    <div className="App">
      <Header />
      
      {/* 文档说的“layout principal” (主布局区域) */}
      <main>
        <AppRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App
