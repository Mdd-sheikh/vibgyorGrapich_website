import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import BlogPost from './pages/blogpost/BlogPost'
import Contact from './pages/contact/Contact'
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
import Terms from './pages/terms/Term'
import Disclaimer from './pages/disclaimer/Disclaimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
    <Navbar/>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
      </main>
      <Footer/>
     </div>
    </>
  )
}

export default App
