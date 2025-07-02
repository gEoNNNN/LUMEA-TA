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
import Calendar from '../components/calendar'; 
import day1Image from "../assets/chinacalendar1.jpg";
import day2Image from "../assets/chinacalendar2.jpg";
import day3Image from "../assets/chinacalendar3.jpg";
import day4Image from "../assets/chinacalendar4.jpg";
import day5Image from "../assets/chinacalendar5.jpg";
import day6Image from "../assets/chinacalendar6.jpg";
import day7Image from "../assets/chinacalendar7.jpg";

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
            <Calendar 
                currentLang={currentLang}
                buttonCount={translations[currentLang].China.calendarDays.length} 
                buttonTexts={translations[currentLang].China.calendarDays} 
                buttonContents={translations[currentLang].China.calendarContents}
                buttonImages={[
                day1Image,
                day2Image,
                day3Image,
                day4Image,
                day5Image,
                day6Image,
                day7Image,
              ]}/>
            <Contacts currentLang={currentLang}/>
            <Footer currentLang={currentLang}/>
        </div>
      </div>
    </div>
  );
};

export default ChinaTripPage;