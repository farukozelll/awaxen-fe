import React from "react";
import './style.css';
import 'boxicons';
import img from './img/home.png';

const About = () => {
    return (
        <section className="about" id="about">
        <div className="about-img">
            <img src={img} alt=""/>
        </div>
        <div className="about-content">
            <h2 className="heading"> Hakkımızda <span>AWAXEN</span></h2>
            <h3>Sera için otonom çözümler üretiyoruz!</h3>
            <p>Dünya nüfusunun sosyal demografisi, küresel tarım endüstrisine büyük bir yük getiriyor. 
                Projemiz, insan iş gücünü daha verimli hale getirmeyi hedefleyen otonom ve akıllı robotlar 
                geliştirerek bu sorunu çözmeyi amaçlıyor.
            </p>
            <a href="#" className="btn">Daha Fazla Oku</a>
        </div>
        </section>
    )
}

export default About