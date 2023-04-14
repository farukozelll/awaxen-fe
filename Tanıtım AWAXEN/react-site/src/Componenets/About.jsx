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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto alias aliquid veniam id placeat 
                repellendus incidunt eos eligendi iste et, optio, omnis rem repudiandae corporis voluptatem expedita 
                sint voluptas, maxime dolor. Labore atque delectus eum voluptatibus blanditiis aut eius voluptate!
            </p>
            <a href="#" className="btn">Read More</a>
        </div>
        </section>
    )
}

export default About