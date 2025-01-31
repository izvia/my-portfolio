import React from 'react';
import abtPic from '../assets/izvia.jpg'

function About() {
  return (
    <div className="about-section">
      <img
        className="about-image"
        src={abtPic}
        alt="Izvia Campos"
      />
      <div className="about-bio">
        <h2>About Me</h2>
        <p>
          I live in Tijuana, Mexico. I graduated in cinematography in 2020.
          Passionate about video and photography, I strive to capture visual
          stories with creativity and precision across various projects, from
          short films to commercial spots.
        </p>
      </div>
    </div>
  );
}

export default About;
