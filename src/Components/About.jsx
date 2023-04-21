import React from "react";
import './style.css';
import 'boxicons';
import img from './home.png';

const About = () => {
    return (
        <section className="about" id="about">
        <div className="about-img">
            <img src={img} alt=""/>
        </div>
        <div className="about-content">
            <h2 className="heading"> About <span>AWAXEN</span></h2>
            <h3>We produce autonomous solutions for greenhouses!</h3>
            <p>The social demography of the world's population puts a huge strain on the global agriculture industry.
                 Our project aims to solve this problem by developing autonomous and intelligent robots,
                  which aim to make the human workforce more productive, domestically and nationally.
            </p>
            <a href="#" className="btn">Read More</a>
        </div>
        </section>
    )
}

export default About