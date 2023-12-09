import React from "react";
import './Style/style.css';
import './Style/home_style.css';
import 'boxicons';
import 'swiper/css';

const Contact = () => {
    return (
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
    )
}

export default Contact