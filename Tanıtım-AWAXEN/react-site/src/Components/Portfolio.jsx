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
        <h2 className="heading">Bizim <span>Projelerimiz</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={portfolio1} alt=""/>
                <div className="portfolio-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio2} alt=""/>
                <div className="portfolio-layer">
                    <h4>Çift Kol Sistemi</h4>
                    <p>İki adet kolun senkronize hareketi, meyveleri daha hızlı bir şekilde toplama imkanı sağlar.
                        Böylece, iş verimliliğinizi artırır ve hasat süresini kısaltır.
                    </p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio3} alt=""/>
                <div className="portfolio-layer">
                    <h4>Kaldırma Sistemi</h4>
                    <p>Yenilikçi meyve toplama robotumuz, kendi kasasını boşaltma özelliğiyle 
                        seralarınızda verimlilik ve kolaylık sağlıyor.</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio4} alt=""/>
                <div className="portfolio-layer">
                    <h4>Dron Teknolojisi</h4>
                    <p>Drone robotumuz, gelişmiş algılama ve görüntü işleme sistemleriyle donatılmıştır. 
                        Meyveleri hassas bir şekilde algılar ve doğru toplama noktalarını belirler.</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio5} alt=""/>
                <div className="portfolio-layer">
                    <h4>İlaçlama Teknolojisi</h4>
                    <p>Robotlarımız, programlanmış ilaçlama miktarlarını hassas bir şekilde uygular ve doğru miktarda ilacın 
                        uygulanmasını sağlar.</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio6} alt=""/>
                <div className="portfolio-layer">
                    <h4>Otonom Sürüş Sistemi</h4>
                    <p>Robotlarımız, seranın iç yapısını hızlı bir şekilde haritalayarak meyve ağaçlarını, 
                        koridorları ve engelleri tespit eder.</p>
                    <a href="#"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio