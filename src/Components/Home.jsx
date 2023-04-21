import React from "react";
import './style.css';
import 'boxicons';
import home from './home.png';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaCamera } from 'react-icons/fa';
import { GiRobotGrab } from 'react-icons/gi';
import { HiOutlineCamera, HiStatusOnline } from 'react-icons/hi';
import { TbDna } from 'react-icons/tb';


const Home = () => {
    return (
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, We are</h3>
                        <h1>AWAXEN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error possimus amet nam, non in maxime nihil.</p>

                        <div className="social-media">
                        <a href="#"><FaFacebook/></a>
                            <a href="#"><FaTwitter/></a>
                            <a href="#"><FaInstagram/></a>
                            <a href="https://www.linkedin.com/company/awaxen/"><FaLinkedin/></a>
                        </div>

                        <a href="#" className="btn">Download DataSheet</a>
                    </div>

                    <div className="profession-container">
                        <div className="profession-box">
                            <div className="profession">
                                <HiStatusOnline size={30}/>
                                <h3>autonomous driving</h3>
                            </div>
                            <div className="profession">
                                <HiOutlineCamera size={30}/>
                                <h3>Image processing</h3>
                            </div>
                            <div className="profession">
                                <GiRobotGrab size={30}/>
                                <h3>Holder Gripper</h3>
                            </div>
                            <div className="profession">
                                <TbDna size={30}/>
                                <h3>Bilemedim</h3>
                            </div>

                            <div className="circle"></div>
                        </div>

                        <div className="overlay"></div>
                    </div>

                    <div className="home-img">
                        <img src={home}/>
                    </div>
                </section>
    )
}

export default Home