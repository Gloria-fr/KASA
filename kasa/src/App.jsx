// src/App.jsx

import React from 'react' // 只要用了JSX，引入React总是没错的
import Header from './components/Header'
import AppRouter from './components/AppRouter' // <--- 引入刚才那个单独的组件

// 注意：这里不需要再引入 Routes, Route, Home, About 了，因为都在 AppRouter 里

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* 这里不再写一长串 Route，而是直接放一个组件 */}
      <AppRouter /> 
      
      {/* 以后这里还会放 <Footer /> */}
    </div>
  )
}

export default App
