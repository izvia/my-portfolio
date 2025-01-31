import React from 'react';
import premiereLogo from '../assets/premiere-logo.png';
import photoshopLogo from '../assets/photoshop-logo.png';
import afterEffectsLogo from '../assets/afterEffects-logo.png';
import finalCutLogo from '../assets/final-cut-logo.png';

function Skills() {
  return (
    <div className="skills-section">
      <h2>What I'm Very Good At</h2>
      <div className="skills-grid">
        <div className="skill">
          <img src={premiereLogo} alt="Adobe Premiere" />
          <p>Adobe Premiere</p>
        </div>
        <div className="skill">
          <img src={photoshopLogo} alt="Adobe Photoshop" />
          <p>Adobe Photoshop</p>
        </div>
        <div className="skill">
          <img src={afterEffectsLogo} alt="Adobe After Effects" />
          <p>Adobe After Effects</p>
        </div>
        <div className="skill">
          <img src={finalCutLogo} alt="Final Cut" />
          <p>Final Cut</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
