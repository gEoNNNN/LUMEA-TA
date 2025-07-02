import React, { useState } from 'react';
import './MarocTripPage.css';
import NavBar from "../components/navbar";
import translations from "./TripPage.json";
import Footer from "../components/footer";
import Contacts from "../components/contacts";
import bg from "../assets/maroc ng.jpg"
import About from "../components/abouttrip";
import TripDescription from "../components/treidescription";
import marocdescription from "../assets/marocdescription.jpg"; 

const TripPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  return (
    <div className="trippage">
      <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <img src={bg} className='trippage-bg'/>
      <div className="trippage-fog-overlay"></div>
      <div className="trippage-content">
        <h1 className="trippage-title">{translations[currentLang].Maroc.title}</h1>
        <h1 className="trippage-description">{translations[currentLang].Maroc.description}</h1>
      </div>
      <div className='trippage-informations'>
        <div className='trippage-informations-about'>
            <About currentLang={currentLang} period={translations[currentLang].Maroc.period} duration={translations[currentLang].Maroc.duration} difficulty={translations[currentLang].Maroc.difficulty} price={translations[currentLang].Maroc.price}/>
            <TripDescription 
              currentLang={currentLang}
              description={translations[currentLang].Maroc.tripDescription}
              text={translations[currentLang].Maroc.tripText}
              image={marocdescription}
            />
            <Contacts currentLang={currentLang}/>
            <Footer currentLang={currentLang}/>
        </div>
      </div>
    </div>
  );
};

export default TripPage;