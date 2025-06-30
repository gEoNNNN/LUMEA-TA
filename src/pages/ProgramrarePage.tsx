import React, { useState } from 'react';
import './ProgramrarePage.css';
import mainbg from "../assets/programarebg.jpg"
import secondbg from "../assets/programarecalendar.svg"
import card1 from "../assets/programrarecard1.png"
import card2 from "../assets/programrarecard2.png"
import card3 from "../assets/programrarecard3.png"
import card4 from "../assets/programrarecard4.png"
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Contacts from "../components/contacts";

const translations = {
  ru: {
    pageTitle: "Программы",
    card1title: "Килиманджаро и Сафари",
    card1description: "7 вершин и 7 вулканов",
    card1price: "2500 €",
    card2title: "Погрузитесь в мир Перу",
    card2description: "Почему стоит посетить этот регион?",
    card2price: "2590 €",
    card3title: "Путь Сантьяго",
    card3description: "Путь к себе через бесконечные горизонты",
    card3price: "В процессе €",
    card4title: "Казбек",
    card4description: "Восхождение на вершину кавказской легенды",
    card4price: "890 €",
    button: "Забронировать место"
  },
  ro: {
    pageTitle: "Programează-te",
    card1title: "Kilimanjaro și Safari",
    card1description: "7 vârfuri și 7 vulcani",
    card1price: "2500 €",
    card2title: "Cufundați-vă în lumea din Peru",
    card2description: "De ce merită să vizitați această regiune?",
    card2price: "2590 €",
    card3title: "Calea de Santiago",
    card3description: "Calea către tine însuți prin orizonturi nesfârșite",
    card3price: "În proces €",
    card4title: "Kazbek",
    card4description: "Urcarea în vârful legendei caucaziene",
    card4price: "890 €",
    button: "Rezervă-ți loc"
  }
};

const ProgramrarePage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  return (
    <div className="programrare-page">
      <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <img src={mainbg} className="programrare-page-mainbg" />
      <div className="programrare-page-fog-overlay"></div>
      <img src={secondbg} className="programrare-page-secondbg" />
      <h1 className="programrare-page-title">{translations[currentLang].pageTitle}</h1>
      <ul className="programrare-page-list">
        <li className="programrare-page-list-item">
          <img src={card1} className="programrare-page-list-item-img" />
          <h2 className="programrare-page-list-item-title">{translations[currentLang].card1title}</h2>
          <p className="programrare-page-list-item-description">{translations[currentLang].card1description}</p>
          <h3 className="programrare-page-list-item-price">{translations[currentLang].card1price}</h3>
          <button className="programrare-page-list-item-button">{translations[currentLang].button}</button>
        </li>
        <li className="programrare-page-list-item">
          <img src={card2} className="programrare-page-list-item-img" />
          <h2 className="programrare-page-list-item-title">{translations[currentLang].card2title}</h2>
          <p className="programrare-page-list-item-description">{translations[currentLang].card2description}</p>
          <h3 className="programrare-page-list-item-price">{translations[currentLang].card2price}</h3>
          <button className="programrare-page-list-item-button">{translations[currentLang].button}</button>
        </li>
        <li className="programrare-page-list-item">
          <img src={card3} className="programrare-page-list-item-img" />
          <h2 className="programrare-page-list-item-title">{translations[currentLang].card3title}</h2>
          <p className="programrare-page-list-item-description">{translations[currentLang].card3description}</p>
          <h3 className="programrare-page-list-item-price">{translations[currentLang].card3price}</h3>
          <button className="programrare-page-list-item-button">{translations[currentLang].button}</button>
        </li>
        <li className="programrare-page-list-item">
          <img src={card4} className="programrare-page-list-item-img" />
          <h2 className="programrare-page-list-item-title">{translations[currentLang].card4title}</h2>
          <p className="programrare-page-list-item-description">{translations[currentLang].card4description}</p>
          <h3 className="programrare-page-list-item-price">{translations[currentLang].card4price}</h3>
          <button className="programrare-page-list-item-button">{translations[currentLang].button}</button>
        </li>
      </ul>
      <div className='programrare-page-footer'>
        <Contacts currentLang={currentLang}/>
        <Footer currentLang={currentLang}/>
      </div>
    </div>
  );
};

export default ProgramrarePage;