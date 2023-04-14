import React from "react";
import './style.css';
import 'boxicons';

const Services = () => {
    return (
        <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Image processing</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at sed labore nesciunt. Quisquam sunt 
                    rerum, culpa obcaecati modi animi sint magni!
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bxs-paint' ></i>
                <h3>autonomous driving</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at sed labore nesciunt. Quisquam sunt 
                    rerum, culpa obcaecati modi animi sint magni!
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-bar-chart-alt' ></i>
                <h3>Holder Gripper</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at sed labore nesciunt. Quisquam sunt 
                    rerum, culpa obcaecati modi animi sint magni!
                </p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    )
}

export default Services