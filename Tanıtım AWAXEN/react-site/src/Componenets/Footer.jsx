import React from "react";
import './style.css';
import 'boxicons';
import 'swiper/css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2023 by AWAXEN | All Rights Reserved</p>
            </div>

            <div className="footer-iconTop">
                <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    )
}

export default Footer