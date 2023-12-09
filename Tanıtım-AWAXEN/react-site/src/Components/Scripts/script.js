import Swiper from "swiper";
import ScrollReveal from "scrollreveal";

window.onload = function(){

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  const page = {
    url: window.location.href,
  };
  console.log(page);

  sections.forEach(sec => {
    let id = sec.getAttribute('id');
      
    if(page !== "") {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
      
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  window.onscroll = () =>{
    
  };

  let darkModeIcon = document.querySelector('#darkMode-icon');

  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  ScrollReveal({ 
    /*reset: true,*/
    distance : '80px',
    duration : 2000,
    delay : 200
  });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}

fetch('veriler.json')
  .then((response) => response.json())
  .then((jsonData) => {
    // JSON verilerini bir Değişkene atama
    const jsonVerileri = jsonData;

    // JSON verisini JavaScript nesnesine dönüştürün
    const data = JSON.parse(jsonVerileri);

    // Paragrafların yerleştirileceği bir konteyner seçin
    const container = document.querySelector('.paragraf-konteyner');

    // Her bir paragraf metnini döngü ile işleyin ve yerleştirin
    data.forEach((item) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = item.paragraf;
      container.appendChild(paragraph);
    });
  })
  .catch((error) => {
    // Hata durumunda burada işlem yapabilirsiniz
    console.error(error);
  });

