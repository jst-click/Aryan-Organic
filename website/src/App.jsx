import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import IndoorOutdoor from './pages/IndoorOutdoor'
import LandPlotGardens from './pages/LandPlotGardens'
import TerraceGarden from './pages/TerraceGarden'
import HowItWorks from './pages/HowItWorks'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import BookVisit from './pages/BookVisit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/indoor-outdoor" element={<IndoorOutdoor />} />
          <Route path="services/land-plot" element={<LandPlotGardens />} />
          <Route path="services/terrace" element={<TerraceGarden />} />
          <Route path="services/indoor" element={<Navigate to="/services/indoor-outdoor#indoor" replace />} />
          <Route path="services/outdoor" element={<Navigate to="/services/indoor-outdoor#outdoor" replace />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-visit" element={<BookVisit />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
