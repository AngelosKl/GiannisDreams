import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyLife from './pages/MyLife'
import Music from './pages/Music'
import Callisthenics from './pages/Callisthenics'
import NextLive from './pages/NextLive'
import Collaborate from './pages/Collaborate'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylife" element={<MyLife />} />
        <Route path="/music" element={<Music />} />
        <Route path="/callisthenics" element={<Callisthenics />} />
        <Route path="/nextlive" element={<NextLive />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
