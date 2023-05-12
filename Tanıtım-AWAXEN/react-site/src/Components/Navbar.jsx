import React from "react";
import './style.css';
import 'boxicons';
import './script.js';

const Navbar = () => {
    return (
            <header className="header">
                <a href="#" className="logo">AWAXEN</a>

                <nav className="navbar">
                    <a href="#home"  className="active">Anasayfa</a>
                    <a href="#about" >Hakkımızda</a>
                    <a href="#services" >Servisler</a>
                    <a href="#farmer" >Panel</a>
                    <a href="#portfolio" >Ürünler</a>
                    <a href="#contact" >İletişim</a>

                </nav>

                <div className='bx bx-moon' id="darkMode-icon"></div>

                <div className='bx bx-menu' id="menu-icon"></div>
            </header>
    )
}

export default Navbar