import React from "react";
import './style.css';
import 'boxicons';
import portfolio1 from './img/portfolio1.png';
import portfolio2 from './img/portfolio2.png';
import portfolio3 from './img/portfolio3.png';
import portfolio4 from './img/portfolio4.png';
import portfolio5 from './img/portfolio5.png';
import portfolio6 from './img/portfolio6.png';

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={portfolio1} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio2} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio3} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio4} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio5} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio6} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, provident consequatur!</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio