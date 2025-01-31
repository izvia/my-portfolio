import React from 'react';
import { Link } from 'react-scroll'; 
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import ShortFilm from './components/ShortFilm';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className='nav-item'><Link to="shortFilm" smooth={true} duration={500} offset={-100}>Short Film</Link></li>
          <li className='nav-item'><Link to="skills" smooth={true} duration={500} offset={-85}>Skills</Link></li>
          <li className='nav-item'><Link to="socials" smooth={true} duration={500} offset={-120}>Commercials</Link></li>
          <li className='izvia-nav-title'>
            <Link to="hero" smooth={true} duration={500} offset={-100}>
              <div className='nav-izvia'>
                <div className='nav-name'>IZVIA CAMPOS</div>
                <div className='nav-role'>EDITOR & VIDEOGRAPHER</div>
              </div>
            </Link>
          </li>
          <li className='nav-item'><Link to="carousel" smooth={true} duration={500} offset={-50}>Photography</Link></li>
          <li className='nav-item'><Link to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
          <li className='nav-item'><Link to="contact" smooth={true} duration={500} offset={-100}>Contact</Link></li>
        </ul>
      </nav>
      <div id="hero"><Hero /></div>
      <div id="shortFilm"><ShortFilm /></div>
      <div id="skills"><Skills /></div>
      <div id="socials"><Socials /></div>
      <div id="carousel"><Carousel /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
