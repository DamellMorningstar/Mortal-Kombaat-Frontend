import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SignUp.css";

const SignUp = ({ setCurrentUser, addFighter }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    image: "",
    weightclass: "",
    cellnum: "",
  });
  const [errors, setErrors] = useState([]);
  console.log(errors);
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json.then((data) => {
            throw data;
          });
        }
      })
      .then((data) => {
        addFighter(data);
        setCurrentUser(data);
      })

      .catch((data) => {
        setErrors(data.errors);
      });
    history.push("/home");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup-div">
          <div className="logo"></div>
          <div className="title">MortalKombaat</div>
          <div className="sub-title">Beta</div>
          <div className="fields">
            <div className="username">
              <input
                name="username"
                onChange={handleChange}
                value={formData.username}
                type="text"
                className="user-input"
                placeholder="username"
              />
            </div>
            <div className="password">
              <input
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="text"
                className="pass-input"
                placeholder="password"
              />
            </div>
            <div className="image">
              <input
                name="image"
                onChange={handleChange}
                value={formData.image}
                type="text"
                className="user-input"
                placeholder="image"
              />
            </div>
            <div className="weightclass">
              <input
                name="weightclass"
                onChange={handleChange}
                value={formData.weightclass}
                type="text"
                className="pass-input"
                placeholder="Weight-class"
              />
            </div>
            <div className="username">
              <input
                name="fightstyle"
                onChange={handleChange}
                value={formData.fightstyle}
                type="text"
                className="user-input"
                placeholder="Fight-Style"
              />
            </div>
            <div className="cellnum">
              <input
                name="cellnum"
                onChange={handleChange}
                value={formData.cellnum}
                type="text"
                className="pass-input"
                placeholder="cellnum"
              />
            </div>
          </div>

          {errors.map((error) => {
            <p key={error} style={{ color: "red" }}>
              {error}
            </p>;
          })}
          <button className="signup-button">Sign-Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
