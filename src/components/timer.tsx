import React, { useState, useEffect } from 'react';
import "./timer.css"

const translations = {
  ru: {
    buttonText1: "Расписание",
    buttonText2: "Забронируйте место",
    days: "дни",
    hours: "часы",
    minutes: "минуты",
    seconds: "секунды"
  },
  ro: {
    buttonText1: "Program",
    buttonText2: "Rezervă-ți locul",
    days: "zile",
    hours: "ore",
    minutes: "minute",
    seconds: "secunde"
  }
};

interface TimerProps {
  currentLang: 'ro' | 'ru';
  image: string;
  title: string;
  description: string;
  date: string; // Format: "13/10/2003" or any valid date format
}

const Timer: React.FC<TimerProps> = ({ currentLang, image, title, description, date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Parse the date in DD/MM/YYYY format
      const [day, month, year] = date.split('/').map(Number);
      const targetDate = new Date(year, month - 1, day).getTime(); // month - 1 because months are 0-indexed
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="timer">
      <img src={image} alt={title} className="timer-image" />
      <h1 className="timer-title">{title}</h1>
      <p className="timer-description">{description}</p>
      
      <div className="timer-countdown">
        <div className="timer-countdown-item">
          <span className="timer-countdown-number">{timeLeft.days}</span>
          <span className="timer-countdown-label">{translations[currentLang].days}</span>
        </div>
        <div className="timer-countdown-divider">|</div>
        
        <div className="timer-countdown-item">
          <span className="timer-countdown-number">{timeLeft.hours}</span>
          <span className="timer-countdown-label">{translations[currentLang].hours}</span>
        </div>
        <div className="timer-countdown-divider">|</div>
        
        <div className="timer-countdown-item">
          <span className="timer-countdown-number">{timeLeft.minutes}</span>
          <span className="timer-countdown-label">{translations[currentLang].minutes}</span>
        </div>
        <div className="timer-countdown-divider">|</div>
        
        <div className="timer-countdown-item">
          <span className="timer-countdown-number">{timeLeft.seconds}</span>
          <span className="timer-countdown-label">{translations[currentLang].seconds}</span>
        </div>
      </div>

      <div className="timer-buttons">
        <button className='timer-button-1'>{translations[currentLang].buttonText1}</button>
        <button className='timer-button-2'>{translations[currentLang].buttonText2}</button>
      </div>
    </div>
  );
};

export default Timer;