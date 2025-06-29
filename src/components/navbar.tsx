import './navbar.css';
import navbarbg from "../assets/navbarbg.png"
import logo from "../assets/logo.svg"
import tiktok from "../assets/tiktok.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import { useState } from 'react';

const translations = {
  ru: {
    home: "Главная",
    calendar: "Календарь",
    blog: "Блог",
    contacts: "Контакты",
  },
  ro: {
    home: "Acasă",
    calendar: "Calendar",
    blog: "Blog",
    contacts: "Contacte",
  }
};

interface NavBarProps {
  currentLang: 'ro' | 'ru';
  setCurrentLang: (lang: 'ro' | 'ru') => void;
}

const Navbar: React.FC<NavBarProps> = ({ currentLang, setCurrentLang }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: 'ro' | 'ru') => {
    setCurrentLang(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${navbarbg})` }}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-menu">
        <a href="#home">{translations[currentLang].home}</a>
        <a href="#calendar">{translations[currentLang].calendar}</a>
        <a href="#blog">{translations[currentLang].blog}</a>
        <a href="#contacts">{translations[currentLang].contacts}</a>
        <div className="language-switcher">
          <button 
            className="language-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {currentLang === 'ro' ? 'Ro' : 'Ru'}
          </button>
          {dropdownOpen && (
            <div className="language-dropdown">
              <button onClick={() => handleLanguageChange('ro')}>Ro</button>
              <button onClick={() => handleLanguageChange('ru')}>Ru</button>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-social">
        <a href="#" aria-label="TikTok">
          <img src={tiktok} alt="TikTok" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;