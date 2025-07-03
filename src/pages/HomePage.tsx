import React, { useState } from 'react';
import './Homepage.css';
import NavBar from "../components/navbar"
import translations from "./Homepage.json"
import Bg from "../assets/homemainbg.jpg"
//import secondaryBG from "../assets/homebg.svg"
//import Carousel from '../components/carusel';
import TripCarousel from "../components/tripcarusel"
import abotusimage from "../assets/desprenoi.jpg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import whyus from "../assets/Dece sa calatoresti cu noi.jpg"
import gallery from "../assets/Galerie.jpg"
import Contacts from "../components/contacts"
import Footer from "../components/footer"
import whyusru from "../assets/whyusru.jpg"

const HomePage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  // Alternative method if the above doesn't work
  const scrollToBottomAlternative = () => {
    const footerElement = document.querySelector('.homepage-footer-section');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the about us section
  const scrollToAboutUs = () => {
    const aboutUsElement = document.querySelector('.homepage-aboutus-section');
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <img src={Bg} className='homepage-main-bg' />
      <div className="homepage-fog-overlay"></div>
      <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <div className="homepage-content">
        <h1 className='homepage-title'>{translations[currentLang].homepage.title}</h1>
        <h1 className="homepage-description">{translations[currentLang].homepage.description}</h1>
        <button 
          className='homepage-button'
          onClick={scrollToAboutUs}
        >
          {translations[currentLang].homepage.button}
        </button>
      </div>
      <div className='homepage-trip-section'>
        <h1 className='homepage-trip-title'>{translations[currentLang].homepage.trip}</h1>
        <TripCarousel currentLang={currentLang}/>
        <button 
          className='homepage-trip-button' 
          onClick={scrollToBottomAlternative}
        >
          {translations[currentLang].homepage.tripButton}
        </button>
        <h1 className='homepage-trip-description'>{translations[currentLang].homepage.tripDescription}</h1>
      </div>
      <div className='homepage-aboutus-section'>
        <img src={abotusimage} className='homepage-aboutus-image' />
        <div className='homepage-aboutus-content'>
          <h1 className='homepage-aboutus-title'>{translations[currentLang].aboutus.title}</h1>
          <p className='homepage-aboutus-description'>{translations[currentLang].aboutus.description}</p>
          <ul className='homepage-aboutus-list'>
            <li className='homepage-aboutus-list-item'>
              <img src={icon1} className='homepage-aboutus-list-item-icon' />
              <p className='homepage-aboutus-list-text'>{translations[currentLang].aboutus.icon1}</p>
            </li>
            <li className='homepage-aboutus-list-item'>
              <img src={icon2} className='homepage-aboutus-list-item-icon' />
              <p className='homepage-aboutus-list-text'>{translations[currentLang].aboutus.icon2}</p>
            </li>
            <li className='homepage-aboutus-list-item'>
              <img src={icon3} className='homepage-aboutus-list-item-icon' />
              <p className='homepage-aboutus-list-text'>{translations[currentLang].aboutus.icon3}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='homepage-other-content'>
        <h1 className='homepage-whyus-text'>{translations[currentLang].homepage.whyus}</h1>
        <img src={currentLang === 'ru' ? whyusru : whyus} className='homepage-whyus-img' />
        <h1 className='homepage-gallery-text'>{translations[currentLang].homepage.gallery}</h1>
        <img src={gallery} className='homepage-gallery-img' />
      </div>
      
      <div className="homepage-footer-section" id="footer-section">
        <Contacts currentLang={currentLang}/>
        <Footer currentLang={currentLang}/>
      </div>
    </div>
  );
};

export default HomePage;