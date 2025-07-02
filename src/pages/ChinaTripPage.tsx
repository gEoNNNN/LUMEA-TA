import React, { useState } from 'react';
import './MarocTripPage.css';
import NavBar from "../components/navbar";
import translations from "./TripPage.json";
import Footer from "../components/footer";
import Contacts from "../components/contacts";
import bg from "../assets/chinabg.jpg"
import About from "../components/abouttrip";
import TripDescription from "../components/treidescription";
import chinadescription from "../assets/chinadescription.jpg"; 

const ChinaTripPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  return (
    <div className="trippage">
      <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <img src={bg} className='trippage-bg'/>
      <div className="trippage-fog-overlay"></div>
      <div className="trippage-content">
        <h1 className="trippage-title">{translations[currentLang].China.title}</h1>
        <h1 className="trippage-description">{translations[currentLang].China.description}</h1>
      </div>
      <div className='trippage-informations'>
        <div className='trippage-informations-about'>
            <About currentLang={currentLang} period={translations[currentLang].China.period} duration={translations[currentLang].China.duration} difficulty={translations[currentLang].China.difficulty} price={translations[currentLang].China.price}/>
            <TripDescription 
              currentLang={currentLang}
              description={translations[currentLang].China.tripDescription}
              text={translations[currentLang].China.tripText}
              image={chinadescription}
            />
            <Contacts currentLang={currentLang}/>
            <Footer currentLang={currentLang}/>
        </div>
      </div>
    </div>
  );
};

export default ChinaTripPage;