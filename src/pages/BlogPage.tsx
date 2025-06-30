import React, { useState } from 'react';
import './Blogpage.css';
import NavBar from "../components/navbar";
import translations from "./BlogPage.json";
import Footer from "../components/footer";
import Bg from "../assets/blogmainbg.jpg";
import Contacts from "../components/contacts"
import secBg from "../assets/blogsecondbg.png"
import blueline from "../assets/blueline.svg"
import blogsection1 from "../assets/blogsection1.jpg"
import biglueline from "../assets/longblueline.svg"
import card1 from "../assets/blogcard1.jpg"
import card2 from "../assets/blogcard2.jpg"
import card3 from "../assets/blogcard3.jpg"

const BlogPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'ro' | 'ru'>('ro');

  return (
    <div className="blogpage">
        <div className='mainpage'>
            <img src={Bg} className='blogpage-main-bg' />
            <img src={secBg} className='blogpage-second-bg' />
            <div className="blogpage-fog-overlay"></div>
            <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} />
            <div className="blogpage-title-container">
                <h1 className='blogpage-title'>{translations[currentLang].blog.title}</h1>
            </div>
            <div className="blogpage-content">
                <h1 className='blogpage-description'>{translations[currentLang].blog.description}</h1>
            </div>
      </div>
      <div className='blogpage-articles'>
        <div className='blogpage-articles-1'>
            <img src={blueline} className='blogpage-articles-1-blueline'/>
            <p className='blogpage-articles-1-title'>{translations[currentLang].blog.section1title}</p>
            <p className='blogpage-articles-1-descritpion-1'>{translations[currentLang].blog.section1description1}</p>
            <img src={blogsection1} className='blogpage-articles-1-img' />
            <p className='blogpage-articles-1-descritpion-2'>{translations[currentLang].blog.section1descritpion2}</p>
            <img src={biglueline} className='blogpage-articles-1-longblueline'/>
        </div>
        <div className='blogpage-articles-2'>
            <p className='blogpage-articles-2-title'>{translations[currentLang].blog.section2title}</p>
            <p className='blogpage-articles-2-descritpion-1'>{translations[currentLang].blog.section2description}</p>
            <ul className='blogpage-articles-2-list'>
                <li className='blogpage-articles-2-list-item'><img src={card1}/></li>
                <li className='blogpage-articles-2-list-item'><img src={card2}/></li>
                <li className='blogpage-articles-2-list-item'><img src={card3}/></li>
            </ul>
        </div>
            <div className='blogpage-articles-3'>
                <p className='blogpage-articles-3-title'>{translations[currentLang].blog.section3title}</p>
                <p className='blogpage-articles-3-descritpion' dangerouslySetInnerHTML={{ __html: translations[currentLang].blog.section3description }}/>
        </div>
      </div>
      <Contacts currentLang={currentLang}/>
      <Footer currentLang={currentLang}/>
    </div>
  );
};

export default BlogPage;