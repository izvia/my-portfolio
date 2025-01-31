import React from "react";
import { Link } from "react-scroll";
import shortScr from "../assets/shortscr.png";
import premiereLogo from "../assets/premiere-logo.png";
import photoshopLogo from "../assets/photoshop-logo.png";
import afterEffectsLogo from "../assets/afterEffects-logo.png";
import finalCutLogo from "../assets/final-cut-logo.png";
import socialsScr from "../assets/socialsscr.png";
import shootScr from "../assets/shootscr.png";
import abtPic from "../assets/izviaHero.png";

const photos = [
  { src: premiereLogo, section: "skills", area: "a", sectionOffset: -85, photo:'premiereLogo' },
  { src: photoshopLogo, section: "skills", area: "b", sectionOffset: -85, photo:'photoshopLogo' },
  { src: afterEffectsLogo, section: "skills", area: "c", sectionOffset: -85, photo:'afterEffectsLogo' },
  { src: finalCutLogo, section: "skills", area: "f", sectionOffset: -85, photo:'finalCutLogo' },
  { src: abtPic, section: "about", area: "d", sectionOffset: -85, photo:'abtPic' },
  { src: shootScr, section: "carousel", area: "e", sectionOffset: -40,  photo:'shootScr' },
  { src: socialsScr, section: "socials", area: "g", sectionOffset: -100, photo:'socialsScr' },
  { src: shortScr, section: "shortFilm", area: "h", sectionOffset: -100, photo:'shortScr' },
];

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-name">Izvia Campos</h1>
        <p>Editor and Videographer</p>
        <Link to={'shortFilm'} smooth={true} duration={800} offset={-100}>
          <button>
            View My Work
          </button>
        </Link>
      </div>

      <div className="mosaic-grid">
        {photos.map((photo, index) => (
          <Link 
            key={index} 
            to={photo.section} 
            smooth={true} 
            duration={800}
            offset={photo.sectionOffset}
            className={`mosaic-item item-${photo.area}`}
          >
            <img
              src={photo.src}
              alt={photo.section}
              className={`mosaic-img photo-${photo.photo}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hero;
