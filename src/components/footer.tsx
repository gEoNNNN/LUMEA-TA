import React from 'react';
import './footer.css';

const translations = {
  ru: {
    copyright: "© 2025 SRL Lumea Ta",
    home: "Главная",
    calendar: "Календарь",
    blog: "Блог",
    contacts: "Контакты",
    top: "Вверх"
  },
  ro: {
    copyright: "© 2025 SRL Lumea Ta",
    home: "Acasă",
    calendar: "Calendar",
    blog: "Blog",
    contacts: "Contacte",
    top: "Sus"
  }
};

interface FooterProps {
  currentLang: 'ro' | 'ru';
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>{translations[currentLang].copyright}</p>
      </div>
      
      <nav className="footer-nav">
        <a href="#home">{translations[currentLang].home}</a>
        <a href="#calendar">{translations[currentLang].calendar}</a>
        <a href="#blog">{translations[currentLang].blog}</a>
        <a href="#contacts">{translations[currentLang].contacts}</a>
      </nav>
      
      <div className="footer-top">
        <button onClick={scrollToTop} className="footer-top-button">
          {translations[currentLang].top} ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;