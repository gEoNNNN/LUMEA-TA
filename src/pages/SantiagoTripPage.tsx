import React, { useState } from 'react';
import './MarocTripPage.css';
import NavBar from "../components/navbar";
import translations from "./TripPage.json";
import Footer from "../components/footer";
import Contacts from "../components/contacts";
import bg from "../assets/santiagobg.jpg"
import About from "../components/abouttrip";
import TripDescription from "../components/treidescription";
import santiagodescription from "../assets/santiagodescription.jpg"; 

const SantiagoTripPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  return (
    <div className="trippage">
      <NavBar currentLang='ru' setCurrentLang={setCurrentLang} />
      <img src={bg} className='trippage-bg'/>
      <div className="trippage-fog-overlay"></div>
      <div className="trippage-content">
        <h1 className="trippage-title">{translations[currentLang].Santiago.title}</h1>
        <h1 className="trippage-description">{translations[currentLang].Santiago.description}</h1>
      </div>
      <div className='trippage-informations'>
        <div className='trippage-informations-about'>
            <About currentLang="ru" period={translations[currentLang].Santiago.period} duration={translations[currentLang].Santiago.duration} difficulty={translations[currentLang].Santiago.difficulty} price={translations[currentLang].Santiago.price}/>
            <TripDescription 
              currentLang='ru'
              description={translations[currentLang].Santiago.tripDescription}
              text={translations[currentLang].Santiago.tripText}
              image={santiagodescription}
            />
            <Contacts currentLang='ru'/>
            <Footer currentLang='ru'/>
        </div>
      </div>
    </div>
  );
};

export default SantiagoTripPage;