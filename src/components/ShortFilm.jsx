import React from 'react';
import shrt from '../assets/izviaCortoFinal.mp4'

function ShortFilm( ) {
  return (
    <div className="short-film">
      <video
        className="short-film-video"
        src={shrt}
        controls
        preload="metadata"
        poster="/path/to/poster.jpg" // Replace with your video poster path
      >
        Your browser does not support the video tag.
      </video>
      <div className="short-film-info">
        <h3>My Short Film</h3>
        <p>This is a film I made and Im describing things about the fil that showcase my skills as a cinematographer</p>
      </div>
    </div>
  );
}

export default ShortFilm;
