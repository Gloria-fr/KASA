// src/App.jsx

import React from 'react' 
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'


function App() {
  return (
    <div className="App">
      <Header />
      
      {/* layout principal*/}
      <main>
        <AppRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App
