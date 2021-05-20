import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FighterContainer from "./FighterContainer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import NewFighterForm from "./NewFighterForm";
import FighterCard from "./FighterCard";
import FightContainer from "./FightContainer";
import FighterPage from "./FighterPage";
import SignUp from "./SignUp";
import Quiz from "./Quiz";
import NewFightForm from "./NewFightForm";
import FightCard from "./FightCard";
import HomePage from "./HomePage";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  /* auto-login */

  // useEffect(() => {
  //   fetch(`http://localhost:3000/me`)
  //     .then(r => r.json())
  //   .then(user=> setCurrentUser(user))

  // },[])

  const navClick = () => {
    setShowNav(!showNav);
  };

  const addFighter = (newFighter) => {
    const updatedFighters = [...fighters, newFighter];
    setFighters(updatedFighters);
  };
  const [fighters, setFighters] = useState([]);
  console.log(currentUser);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => setFighters(data));
  }, []);

  const [fights, setFights] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/fights`)
      .then((r) => r.json())
      .then((data) => setFights(data));
  }, []);

  function updateFight(updatedFight) {
    const updatedFightArray = fights.map((fight) => {
      if (fight.id === updatedFight.id) {
        return updatedFight;
      } else {
        return fight;
      }
    });
    setFights(updatedFightArray);
  }

  const addNewFight = (newFight) => {
    const updatedFights = [...fights, newFight];
    setFights(updatedFights);
  };

  return (
    <Router>
      <>
        <Switch>
          <Route path="/fights">
            <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            <FightContainer
              updateFight={updateFight}
              setFights={setFights}
              fighters={fighters}
              fights={fights}
              currentUser={currentUser}
            />
            {/* <HomePage />  */}
          </Route>
          <Route path="/signup">
            <SignUp addFighter={addFighter} setCurrentUser={setCurrentUser} />
          </Route>

          <Route path="/home">
            <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            <HomePage />
          </Route>
          <Route path="/schedulefight">
            <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            <NewFightForm
              addNewFight={addNewFight}
              currentUser={currentUser}
              fighters={fighters}
            />
            <HomePage />
          </Route>

          <Route path="/login">
            ] <LoginForm setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/fighters">
            <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            {/* <HomePage />  */}
            {/* <NewFighterForm addFighter={addFighter} /> */}
            <FighterContainer currentUser={currentUser} fighters={fighters} />
          </Route>
          <Route path="/fighter/:id">
            <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            <FighterPage />
            <HomePage />
          </Route>

          <Route path="/">
            <Quiz />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
