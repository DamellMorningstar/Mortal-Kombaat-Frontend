import React, { useState, useEffect } from "react";
import "./FighterCard.css";
import NewFightForm from "./NewFightForm";
import FighterPage from "./FighterPage";
import { Link, useHistory } from "react-router-dom";

const FighterCard = ({
  id,
  username,
  weightclass,
  image,
  fightstyle,
  cellnum,
  currentUser,
  fighters,
}) => {
  const [dontlook, setDontLook] = useState(true);
  const [fighterData, setFighterData] = useState(null);

  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((fighter) => console.log(fighter));
  };
  return (
    <div className="container" data-tilt>
      <main className="grid">
        <article>
          <img src={image} alt={username} />

          <div className="text">
            <h3>{username}</h3>
            <Link to={`/fighter/${id}`}>
              <button>More Details</button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};
<script type="text/javascript" src="vanilla-tilt.js"></script>;

export default FighterCard;
