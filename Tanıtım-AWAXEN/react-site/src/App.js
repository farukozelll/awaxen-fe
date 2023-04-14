import 'C:/Users/viati/Documents/GitHub/awaxen-fe/Tanıtım-AWAXEN/react-site/src/Componenets/style.css';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Services from './Componenets/Services';
import Portfolio from './Componenets/Portfolio';
import Testimonial from './Componenets/Testimonial';
import Contact from './Componenets/Contact';
import Footer from './Componenets/Footer';

function App() {
  return (
    <html>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </body>
    </html>
  );
}

export default App;
