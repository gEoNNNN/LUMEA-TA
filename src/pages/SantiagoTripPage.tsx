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
import Calendar from '../components/calendar'; 
import day1Image from "../assets/SantiagoCalendar1.jpg";
import day2Image from "../assets/SantiagoCalendar2.jpg";
import day3Image from "../assets/SantiagoCalendar3.jpg";
import day4Image from "../assets/SantiagoCalendar4.jpg";
import day5Image from "../assets/SantiagoCalendar5.jpg";


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
            <Calendar 
                currentLang={currentLang}
                buttonCount={translations[currentLang].Santiago.calendarDays.length} 
                buttonTexts={translations[currentLang].Santiago.calendarDays} 
                buttonContents={translations[currentLang].Santiago.calendarContents}
                buttonImages={[
                day1Image,
                day2Image,
                day3Image,
                day4Image,
                day5Image
              ]}/>
            <Contacts currentLang='ru'/>
            <Footer currentLang='ru'/>
            
        </div>
      </div>
    </div>
  );
};

export default SantiagoTripPage;