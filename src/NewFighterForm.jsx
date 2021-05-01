import React, { useState } from "react";
import "./NewFighterForm.css";

const NewFighterForm = ({ addFighter }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("");
  const [cellnum, setCellnum] = useState("");
  const [weightclass, setWeightclass] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    fetch("http://localhost:3000/fighters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        detail: detail,
        image: image,
        cellnum: cellnum,
        weightclass: weightclass
      }),
    })
      .then((r) => r.json())
      .then((data) => addFighter(data));
  };

  return (
    <div className="new-fighter-form">
      <form onSubmit={handleSubmit} className="new-fighter">
        <label className="username"></label>
        <input
          type="text"
          className="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="password"></label>

        <input
          type="text"
          className="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="image"></label>

        <input
          type="text"
          className="image"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label className="details"></label>

        <input
          type="text"
          className="details"
          placeholder="fight-style"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <label className="weightclass"></label>

        <input
          type="text"
          className="weightclass"
          placeholder="weightclass"
          value={weightclass}
          onChange={(e) => setWeightclass(e.target.value)}
        />

        <label className="cellnum"></label>

        <input
          type="text"
          className="cellnum"
          placeholder="cellnum"
          value={cellnum}
          onChange={(e) => setCellnum(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewFighterForm;
