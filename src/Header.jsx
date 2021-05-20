import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

const Header = ({ navClick }) => {
  return (
    <div>
      <header>
        <GiHamburgerMenu onClick={navClick} />
      </header>
      <div className="logingform"></div>
    </div>
  );
};

export default Header;
