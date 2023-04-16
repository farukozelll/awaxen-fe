import React from "react";
import './style.css';
import 'boxicons';
import './script.js';

const Navbar = () => {
    return (
            <header className="header">
                <a href="#" className="logo">AWAXEN</a>

                <nav className="navbar">
                    <a href="#home"  className="active">Home</a>
                    <a href="#about" >About</a>
                    <a href="#services" >Services</a>
                    <a href="#portfolio" >Portfolio</a>
                    <a href="#contact" >Contact</a>
                </nav>

                <div className='bx bx-moon' id="darkMode-icon"></div>

                <div className='bx bx-menu' id="menu-icon"></div>
            </header>
    )
}

export default Navbar