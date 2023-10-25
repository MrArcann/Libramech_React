import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Hakkımızda from './pages/Hakkımızda.jsx'
import Projeler from './pages/Projeler.jsx'
import Referanslar from './pages/Referanslar.jsx'
import İletişim from './pages/İletişim.jsx'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hakkımızda' element={<Hakkımızda />} />
      <Route path='/projeler' element={<Projeler />} />
      <Route path='/referanslar' element={<Referanslar />} />
      <Route path='/iletişim' element={<İletişim />} />

    </Routes>
    </BrowserRouter>;
    
    
    
}

export default App
