import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import NotFound from './Pages/NotFound'
import ScrollAnimationManager from './components/ScrollAnimationManager'
import ScrollToTop from './components/ScrollToTop'
import Cursor from './components/Cursor'


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollAnimationManager />
      <Cursor />
      <Navbar />
      <div className="relative">
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
