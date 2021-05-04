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

function App() {
  const [showNav, setShowNav] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)
  const navClick = () => {
    setShowNav(!showNav);
  };

  const addFighter = (newFighter) => {
    const updatedFighters = [...fighters, newFighter]
    setFighters(updatedFighters)
}
  const [fighters, setFighters] = useState([]);
  console.log(currentUser)
    useEffect(() => {
      fetch("http://localhost:3000/users")
        .then((r) => r.json())
        .then((data) => setFighters(data));
    }, []);


    const [fights, setFights] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/fights`)
            .then(r => r.json())
        .then(data => setFights(data))
        
    }, [])


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
  
   

  return (
    <Router>
      <>
        <Switch>
          <Route path='/fights'>
          <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
          <FightContainer updateFight={updateFight} setFights={setFights} fighters={fighters} fights={fights} currentUser={currentUser} />
          </Route>

          <Route path='/login'>
        <LoginForm setCurrentUser={setCurrentUser} />
          </Route>
          <Route path='/fighters'>
          <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
          <NewFighterForm addFighter={addFighter}/>
            <FighterContainer currentUser={currentUser} fighters={fighters} />
          </Route>
          <Route path='/'>
          <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
          </Route>
          
        </Switch>

      </>
    </Router>
  );
}

export default App;
