import React from "react";
import './style.css';
import 'boxicons';
import 'swiper/css';
import home from './img/home.png';
import testimonial_1 from './img/testimonial-1.jpg';
import testimonial_2 from './img/testimonial-2.jpg';
import testimonial_3 from './img/testimonial-3.jpg';

const Testimonial = () => {
    return (
        <div className="testimonial-container">
        <h2 className="heading">Değerli <span>Görüşler</span></h2>

        <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper">
                <div className="testimonial-content swiper-wrapper">
                    <div className="testimonial-slide swiper-slide">
                        <img src={testimonial_1}/>
                        <h3>Jakson Levi</h3>
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
                        <h3>Jakson Leva</h3>
                        <p>Meyve toplama robotları, tarım sektörünün geleceğinde büyük bir potansiyele sahip. 
                            İleri teknolojiye sahip bu robotlar, meyve üretiminde kaliteyi artırırken, 
                            çiftçilere daha sürdürülebilir bir tarım modeli sunar. Bu sayede, gelecek nesillerin 
                            sağlıklı ve besleyici gıdalara erişimi güvence altına alınırken, tarım sektörü daha 
                            verimli ve etkili hale gelir. Meyve toplayan robotlar, tarımda dönüşümün anahtarı 
                            olacak ve geleceğin tarımını şekillendirecektir.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={testimonial_3}/>
                        <h3>Jakson Levo</h3>
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
    )
}

export default Testimonial