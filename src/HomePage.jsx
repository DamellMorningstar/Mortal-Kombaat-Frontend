import React from "react";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div>
      <video id="videoBG" poster="video-screenshit.png" autoPlay muted loop>
        <source src="kungfu-vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
