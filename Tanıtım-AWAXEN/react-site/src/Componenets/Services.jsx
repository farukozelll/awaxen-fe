import React from "react";
import './style.css';
import 'boxicons';
import { HiOutlineCamera, HiStatusOnline } from "react-icons/hi";
import { GiRobotGrab } from "react-icons/gi";

const Services = () => {
    return (
        <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <HiOutlineCamera size={30}/>
                <h3>Image processing</h3>
                <p>Görüş sistemlerimiz meyveleri "görebilir" ve son derece karmaşık ve karmaşık yetiştirme ortamlarında
                     bile olgun ve toplanmaya hazır olup olmadıklarını anlayabilir.
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <HiStatusOnline size={30}/>
                <h3>autonomous driving</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at sed labore nesciunt. Quisquam sunt 
                    rerum, culpa obcaecati modi animi sint magni!
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <GiRobotGrab size={30}/>
                <h3>Holder Gripper</h3>
                <p>Bir bitki ile temas etmek, nazik bir dokunuştan daha fazlasını gerektirir.
                    Tucutumuz karışık sarmaşıkların arasından meyvelere ulaşabilir ve iz toplamadan koparır.
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    )
}

export default Services