import React from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import video1 from '../assets/video1output.mp4';
import video2 from '../assets/video2output.mp4';
import video3 from '../assets/video3output.mp4';

function Socials() {
  return (
    <div className="socials-section">
      <div className='social-header'>
        <h2>I Also Do Great Commercial Work!</h2>
        <p>This showcase highlights my ability to create impactful commercial content, blending storytelling with technical expertise. From editing dynamic visuals to designing animations, I bring ideas to life with creativity and precision, ensuring every frame resonates with the audience.</p>
      </div>
      <div className='allDevices'>
          <div className='deviceCont'>
              <DeviceFrameset device="iPhone X" color="gold" height="750px">
                <video
                  src={video1}
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black' }}
                >
                  Your browser does not support the video tag.
                </video>
              </DeviceFrameset>
          </div>
          <div className='deviceCont'>
              <DeviceFrameset device="iPhone X" color="gold" height="750px">
                <video
                  src={video2}
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black'  }}
                >
                  Your browser does not support the video tag.
                </video>
              </DeviceFrameset>
          </div>
          <div className='deviceCont'>
              <DeviceFrameset device="iPhone X" color="gold" height="750px">
                <video
                  src={video3}
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'black'  }}
                >
                  Your browser does not support the video tag.
                </video>
              </DeviceFrameset>
          </div>
      </div>
    </div>
  );
}

export default Socials;
