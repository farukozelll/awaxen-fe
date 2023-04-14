import React from "react";
import './style.css';
import 'boxicons';
import home from './home.png';

const Home = () => {
    return (
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, We are</h3>
                        <h1>AWAXEN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error possimus amet nam, non in maxime nihil.</p>

                        <div className="social-media">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter' ></i></a>
                            <a href="#"><i className='bx bxl-instagram' ></i></a>
                            <a href="https://www.linkedin.com/company/awaxen/"><i className='bx bxl-linkedin' ></i></a>
                        </div>

                        <a href="#" className="btn">Download DataSheet</a>
                    </div>

                    <div className="profession-container">
                        <div className="profession-box">
                            <div className="profession">
                                <i className='bx bx-code-alt'></i>
                                <h3>autonomous driving</h3>
                            </div>
                            <div className="profession">
                                <i className='bx bx-camera' ></i>
                                <h3>Image processing</h3>
                            </div>
                            <div className="profession">
                                <i className='bx bx-palette' ></i>
                                <h3>Holder Gripper</h3>
                            </div>
                            <div className="profession">
                                <i className='bx bx-video-recording' ></i>
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