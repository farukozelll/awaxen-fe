import React from "react";
import './style.css';
import 'boxicons';
import { HiOutlineCamera, HiStatusOnline } from "react-icons/hi";
import { GiRobotGrab } from "react-icons/gi";

const Services = () => {
    return (
        <section className="services" id="services">
        <h2 className="heading">Bizim <span>Hizmetlerimiz</span></h2>

        <div className="services-container">
            <div className="services-box">
                <HiOutlineCamera size={30}/>
                <h3>Görüntü İşleme</h3>
                <p>Robotumuz, gelişmiş görüntü işleme algoritmaları sayesinde meyveleri hassas bir şekilde algılar. 
                    Renk, boyut, olgunluk gibi kriterleri değerlendirerek hangi meyvenin toplanması gerektiğini belirler. 
                    Bu sayede, yanlış meyve toplama oranını minimuma indirir.
                </p>
                <a href="#" className="btn">Daha Fazla Oku</a>
            </div>
            <div className="services-box">
                <HiStatusOnline size={30}/>
                <h3>Otonom Sürüş</h3>
                <p>Robotlarımız, haritalama sonuçlarına dayanarak seralar içinde güvenli ve akıllı bir şekilde hareket eder. 
                    Engelleri algılar ve onlardan kaçınır, böylece düzgün bir sürüş sağlar. 
                    Diğer robotlar ve eşyalarla etkileşime geçerek çarpışma riskini minimize eder.
                </p>
                <a href="#" className="btn">Daha Fazla Oku</a>
            </div>
            <div className="services-box">
                <GiRobotGrab size={30}/>
                <h3>Tutucu Kavrama</h3>
                <p>Yumuşak ve kırılgan meyveleri dahi hassas bir şekilde tutabilen tutucu ucumuz, 
                    meyvelere zarar vermeden toplama işlemini gerçekleştirir. Özel tutma mekanizması sayesinde meyvenin 
                    sıkışmasını veya ezilmesini önler, meyve kalitesini korur.
                </p>
                <a href="#" className="btn">Daha Fazla Oku</a>
            </div>
        </div>
    </section>
    )
}

export default Services