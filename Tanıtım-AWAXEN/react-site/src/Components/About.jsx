import React from "react";
import './Style/about_style.css';
import './Style/style.css';
import 'boxicons';
import './script.js';
import home from './img/home.png';
import Logo from './Logo';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const About = () => {
    return (
        <section className="about" id="about">

        <div className="about-overlay">
        <div className="logo">
            <Canvas orthographic>
                <Stage environment="city" intensity={0.6}>
                <Logo/>
                </Stage>
                <OrbitControls enableZoom={false}></OrbitControls>
            </Canvas>
        </div>
        </div>
        
            
        <div className="about-content">
            <h2 className="heading"> Hakkımızda</h2>
            <h3>Sera için otonom çözümler üretiyoruz!</h3>
            <p>Dünya nüfusunun sosyal demografisi, küresel tarım endüstrisine büyük bir yük getiriyor. 
                Projemiz, insan iş gücünü daha verimli hale getirmeyi hedefleyen otonom ve akıllı robotlar 
                geliştirerek bu sorunu çözmeyi amaçlıyor.
            </p>
        </div>
        <h2 className="heading">Değerlerimiz </h2>
        <div className="about-container">
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
            <div className="about-box">
                <img src={home} alt=""/>
                <div className="about-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About