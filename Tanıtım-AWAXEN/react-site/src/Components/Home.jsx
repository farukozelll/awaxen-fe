import React from "react";
import './style.css';
import 'boxicons';
import home from './img/home.png';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook,} from 'react-icons/fa';
import { GiRobotGrab } from 'react-icons/gi';
import { HiOutlineCamera, HiStatusOnline } from 'react-icons/hi';
import { TbDna } from 'react-icons/tb';


const Home = () => {
    return (
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, We are</h3>
                        <h1>AWAXEN</h1>
                        <p>Geleceğin tarım teknolojilerini şekillendiriyoruz. 
                            Gelişmiş otomasyon çözümleriyle, tarım sektöründe verimliliği artırıyor, 
                            sürdürülebilirlik ve inovasyonu destekliyoruz.</p>

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
                                <h3>Otonom Sürüş</h3>
                            </div>
                            <div className="profession">
                                <HiOutlineCamera size={30}/>
                                <h3>Görüntü İşleme</h3>
                            </div>
                            <div className="profession">
                                <GiRobotGrab size={30}/>
                                <h3>Tututcu Kavrama</h3>
                            </div>
                            <div className="profession">
                                <TbDna size={30}/>
                                <h3>Dron Teknolojisi</h3>
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