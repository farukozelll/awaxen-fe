import React from "react";
import './Style/style.css';
import './Style/home_style.css';
import 'boxicons';
import home from './img/home.png';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook,} from 'react-icons/fa';
import { GiRobotGrab } from 'react-icons/gi';
import { HiOutlineCamera, HiStatusOnline } from 'react-icons/hi';
import { TbDna } from 'react-icons/tb';
import portfolio1 from './img/portfolio1.png';
import portfolio2 from './img/portfolio2.png';
import portfolio3 from './img/portfolio3.png';
import portfolio4 from './img/portfolio4.png';
import portfolio5 from './img/portfolio5.png';
import portfolio6 from './img/portfolio6.png';
import testimonial_1 from './img/testimonial-1.jpg';
import testimonial_2 from './img/testimonial-2.jpg';
import testimonial_3 from './img/testimonial-3.jpg';
import 'swiper/css';
import './script.js';


const Home = () => {
    return (
        <div>
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
                <section className="about" id="about">
        <div className="about-img">
            <img src={home} alt=""/>
        </div>
        <div className="about-content">
            <h2 className="heading"> Hakkımızda <span>AWAXEN</span></h2>
            <h3>Sera için otonom çözümler üretiyoruz!</h3>
            <p>Dünya nüfusunun sosyal demografisi, küresel tarım endüstrisine büyük bir yük getiriyor. 
                Projemiz, insan iş gücünü daha verimli hale getirmeyi hedefleyen otonom ve akıllı robotlar 
                geliştirerek bu sorunu çözmeyi amaçlıyor.
            </p>
            <a href="/about" className="btn">Daha Fazla Oku</a>
        </div>
        </section>
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
                <a href="/services" className="btn">Daha Fazla Oku</a>
            </div>
            <div className="services-box">
                <HiStatusOnline size={30}/>
                <h3>Otonom Sürüş</h3>
                <p>Robotlarımız, haritalama sonuçlarına dayanarak seralar içinde güvenli ve akıllı bir şekilde hareket eder. 
                    Engelleri algılar ve onlardan kaçınır, böylece düzgün bir sürüş sağlar. 
                    Diğer robotlar ve eşyalarla etkileşime geçerek çarpışma riskini minimize eder.
                </p>
                <a href="/services" className="btn">Daha Fazla Oku</a>
            </div>
            <div className="services-box">
                <GiRobotGrab size={30}/>
                <h3>Tutucu Kavrama</h3>
                <p>Yumuşak ve kırılgan meyveleri dahi hassas bir şekilde tutabilen tutucu ucumuz, 
                    meyvelere zarar vermeden toplama işlemini gerçekleştirir. Özel tutma mekanizması sayesinde meyvenin 
                    sıkışmasını veya ezilmesini önler, meyve kalitesini korur.
                </p>
                <a href="/services" className="btn">Daha Fazla Oku</a>
            </div>
        </div>
    </section>
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Bizim <span>Projelerimiz</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={portfolio1} alt=""/>
                <div className="portfolio-layer">
                    <h4>Çoklu Depolama</h4>
                    <p>Robotumuz, entegre edilmiş ekstra kasalar sayesinde daha fazla meyve depolama kapasitesine sahiptir.</p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio2} alt=""/>
                <div className="portfolio-layer">
                    <h4>Çift Kol Sistemi</h4>
                    <p>İki adet kolun senkronize hareketi, meyveleri daha hızlı bir şekilde toplama imkanı sağlar.
                        Böylece, iş verimliliğinizi artırır ve hasat süresini kısaltır.
                    </p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio3} alt=""/>
                <div className="portfolio-layer">
                    <h4>Kaldırma Sistemi</h4>
                    <p>Yenilikçi meyve toplama robotumuz, kendi kasasını boşaltma özelliğiyle 
                        seralarınızda verimlilik ve kolaylık sağlıyor.</p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio4} alt=""/>
                <div className="portfolio-layer">
                    <h4>Dron Teknolojisi</h4>
                    <p>Drone robotumuz, gelişmiş algılama ve görüntü işleme sistemleriyle donatılmıştır. 
                        Meyveleri hassas bir şekilde algılar ve doğru toplama noktalarını belirler.</p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio5} alt=""/>
                <div className="portfolio-layer">
                    <h4>İlaçlama Teknolojisi</h4>
                    <p>Robotlarımız, programlanmış ilaçlama miktarlarını hassas bir şekilde uygular ve doğru miktarda ilacın 
                        uygulanmasını sağlar.</p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio6} alt=""/>
                <div className="portfolio-layer">
                    <h4>Otonom Sürüş Sistemi</h4>
                    <p>Robotlarımız, seranın iç yapısını hızlı bir şekilde haritalayarak meyve ağaçlarını, 
                        koridorları ve engelleri tespit eder.</p>
                    <a href="/portfolio"><i className='bx bx-link-external' ></i></a>
                </div>
            </div>
        </div>
    </section>
    <div className="testimonial-container">
        <h2 className="heading">Değerli <span>Görüşler</span></h2>

        <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper">
                <div className="testimonial-content swiper-wrapper">
                    <div className="testimonial-slide swiper-slide">
                        <img src={testimonial_1}/>
                        <h3>Nebi Berhan Taş</h3>
                        <p>Seralarda meyve toplayan robotlar, tarım endüstrisinde devrim yaratıyor. 
                            Bu yenilikçi teknoloji, meyve hasadını kolaylaştırırken, 
                            verimliliği artırıyor ve iş gücü maliyetlerini düşürüyor. 
                            Bu robotlar, özel olarak tasarlanmış tutucu uçları sayesinde meyveleri 
                            hassas bir şekilde toplama yeteneğine sahip. Aynı zamanda görüntü 
                            işleme teknolojisi sayesinde meyve olgunluğunu ve kalitesini doğru bir şekilde tespit 
                            ederek en uygun zamanda hasat gerçekleştiriyor. Bu, meyve üreticilerine zaman ve enerji 
                            tasarrufu sağlarken, meyve kalitesini de korumalarına yardımcı oluyor.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={testimonial_2}/>
                        <h3>Ahmet Soymaz</h3>
                        <p>Meyve toplama robotları, tarım sektörünün geleceğinde büyük bir potansiyele sahip. 
                            İleri teknolojiye sahip bu robotlar, meyve üretiminde kaliteyi artırırken, 
                            çiftçilere daha sürdürülebilir bir tarım modeli sunar. Bu sayede, gelecek nesillerin 
                            sağlıklı ve besleyici gıdalara erişimi güvence altına alınırken, tarım sektörü daha 
                            verimli ve etkili hale gelir. Meyve toplayan robotlar, tarımda dönüşümün anahtarı 
                            olacak ve geleceğin tarımını şekillendirecektir.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={testimonial_3}/>
                        <h3>Yunus İnci</h3>
                        <p>Bu tür robotlar, tarım sektöründe büyük bir devrim yaratıyor. Özellikle meyve hasatı sürecindeki 
                            verimliliği arttırarak, işçi maliyetlerini azaltıyor ve aynı zamanda insan sağlığına zararlı olabilen 
                            kimyasal ilaçların kullanımını da azaltıyorlar. Aynı zamanda bu robotlar, yüksek hassasiyetle 
                            meyve tespiti ve toplama yaparak, hasat verimliliğini artırıyor ve hasat kayıplarını 
                            önlemeye yardımcı oluyorlar. Böylece, tarım sektöründe daha sürdürülebilir 
                            bir geleceğin kapısını aralıyorlar.</p>
                    </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <section className="contact" id="contact">
            <h2 className="heading">Bize <span>Ulaşın!</span></h2>

            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Tam İsim"/>
                    <input type="email" placeholder="Email Adresi"/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Telefon Numarası"/>
                    <input type="text" placeholder="Email Konusu"/>
                </div>
                <textarea name="" id="" cols={30} rows={10} placeholder="Sizin Mesajınız"></textarea>
                <input type="submit" value="Mesaj Gönder" className="btn"/>
            </form>
        </section>
        <footer className="footer">
            <div className="footer-text">
                <p>Telif Hakkı &copy; 2023 AWAXEN tarafından | Her Hakkı Saklıdır</p>
            </div>

            <div className="footer-iconTop">
                <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
                </div>
                
    )
}

export default Home