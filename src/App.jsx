import './App.css'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Homemain from './components/Homemain'
import Footer from './components/Footer'
import About from './components/About';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Cars from './components/Cars';
import Contact from './components/Contact';
import Ordertracking from './components/Ordertracking';



function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ordertracking" element={<Ordertracking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
