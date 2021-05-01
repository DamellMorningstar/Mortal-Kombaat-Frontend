import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FighterContainer from "./FighterContainer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import NewFighterForm from "./NewFighterForm";

function App() {
  const [showNav, setShowNav] = useState(false);
  const navClick = () => {
    setShowNav(!showNav);
  };
  const addFighter = (newFighter) => {
    const updatedFighters = [...fighters, newFighter]
    setFighters(updatedFighters)
}
  const [fighters, setFighters] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/fighters")
        .then((r) => r.json())
        .then((data) => setFighters(data));
    }, []);


  return (
    <Router>
      <>
        <Switch>

          <Route path='/login'>
        <LoginForm />
          </Route>
          <Route path='/'>
          <Header navClick={navClick} />
            <Sidebar showNav={showNav} />
            <NewFighterForm addFighter={addFighter}/>
            <FighterContainer fighters={fighters} />
        </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;
