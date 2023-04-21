import React from "react";
import './style.css';
import 'boxicons';
import 'swiper/css';
import home from './home.png';

const Testimonial = () => {
    return (
        <div className="testimonial-container">
        <h2 className="heading">Valuable <span>Testimonial</span></h2>

        <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper">
                <div className="testimonial-content swiper-wrapper">
                    <div className="testimonial-slide swiper-slide">
                        <img src={home}/>
                        <h3>Jakson Levi</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente laudantium aliquam hic 
                            dicta iure suscipit quam, eaque quibusdam pariatur rem veritatis ad soluta error incidunt expedita 
                            assumenda nihil earum rerum tempore molestiae amet? Voluptas ipsam at deserunt aperiam placeat ipsum, 
                            blanditiis voluptatum. Debitis tempora eveniet incidunt quas modi sequi, corrupti commodi expedita 
                            nulla iste ipsum impedit officiis qui adipisci.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={home}/>
                        <h3>Jakson Leva</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente laudantium aliquam hic 
                            dicta iure suscipit quam, eaque quibusdam pariatur rem veritatis ad soluta error incidunt expedita 
                            assumenda nihil earum rerum tempore molestiae amet? Voluptas ipsam at deserunt aperiam placeat ipsum, 
                            blanditiis voluptatum. Debitis tempora eveniet incidunt quas modi sequi, corrupti commodi expedita 
                            nulla iste ipsum impedit officiis qui adipisci.</p>
                    </div>
                    <div className="testimonial-slide swiper-slide">
                        <img src={home}/>
                        <h3>Jakson Levo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente laudantium aliquam hic 
                            dicta iure suscipit quam, eaque quibusdam pariatur rem veritatis ad soluta error incidunt expedita 
                            assumenda nihil earum rerum tempore molestiae amet? Voluptas ipsam at deserunt aperiam placeat ipsum, 
                            blanditiis voluptatum. Debitis tempora eveniet incidunt quas modi sequi, corrupti commodi expedita 
                            nulla iste ipsum impedit officiis qui adipisci.</p>
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