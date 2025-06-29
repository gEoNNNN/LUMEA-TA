import React from 'react';
import './contacts.css';
import natalia from "../assets/natalia.svg"
import viber from "../assets/viber.svg"
import whatsapp from "../assets/wa.svg"
import telegram from "../assets/telegram.svg"
import facebook from "../assets/facebookc.svg"
import instagram from "../assets/instagramc.svg"
import tiktok from "../assets/tiktokc.svg"
import youtube from "../assets/youtube.svg"


const translations = {
  ru: {
    title: "Контакт",
    text: "Напишите нам или позвоните – мы действительно любим быть рядом с вами!",
    name: "Наталья",
    description: "Координатор и опытный гид",
    number: "+373 69 69 22 65",
    email: "lumeata.md@gmail.com"
  },
  ro: {
    title: "Contact",
    text: "Scrie-ne cu drag sau sună-ne – iubim cu adevărat să fim aproape de voi!",
    name: "Natalia",
    description: "Coordonator și ghid experimentat",
    number: "+373 69 69 22 65",
    email: "lumeata.md@gmail.com"
  }
};

interface ContactsProps {
  currentLang: 'ro' | 'ru';
}

const Contacts: React.FC<ContactsProps> = ({ currentLang }) => {
  return (
    <div className="contacts">
      <h1 className="contacts-title">{translations[currentLang].title}</h1>
      <p className="contacts-text">{translations[currentLang].text}</p>
      <img src={natalia} className='contacts-image'/>
      <h2 className="contacts-name">{translations[currentLang].name}</h2>
      <p className="contacts-description">{translations[currentLang].description}</p>
      <p className="contacts-number">{translations[currentLang].number}</p>
      <p className="contacts-email">{translations[currentLang].email}</p>
      <ul>
        <li><img src={viber} /></li>
        <li><img src={whatsapp} /></li>
        <li><img src={telegram} /></li>
        <li><img src={facebook} /></li>
        <li><img src={instagram} /></li>
        <li><img src={tiktok} /></li>
        <li><img src={youtube} /></li>
      </ul>
    </div>

  );
};

export default Contacts;