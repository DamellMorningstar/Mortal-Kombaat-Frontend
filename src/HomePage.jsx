import React from "react";
import KungFu from './kungfu-vid.mp4'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div>
      <video id="videoBG" poster="video-screenshit.png" autoPlay muted loop>
        <source src={KungFu} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
