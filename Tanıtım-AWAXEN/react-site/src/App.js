import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {React} from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Components/Style/home_style.css';
import './Components/Style/about_style.css';
import 'boxicons';
import './Components/script.js';

function App() {
  return (
    <BrowserRouter>
    <html>
    <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    </head>
    <body>
      <header className="header">
        <a href="/home" className="logo">AWAXEN</a>

          <nav className="navbar">
            <a href="/home" className="active" >Anasayfa</a>
            <a href="/about" >Hakkımızda</a>
            <a href="/services" >Servisler</a>
            <a href="/farmer" >Panel</a>
            <a href="/portfolio" >Ürünler</a>
            <a href="/contact" >İletişim</a>
          </nav>

        <div className='bx bx-moon' id="darkMode-icon"></div>

        <div className='bx bx-menu' id="menu-icon"></div>
      </header>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
    </body>
  </html>
  </BrowserRouter>
  );
}

export default App;
