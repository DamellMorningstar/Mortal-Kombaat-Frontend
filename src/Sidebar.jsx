import React from 'react';
import { link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = ({showNav}) => {
  return (
    <div className={showNav? "sidebar active": "sidebar"}>
       <img src="https://i.pinimg.com/474x/6e/56/40/6e56407428ad13be01f0ff98d2374a2d.jpg" alt="bruce lee" className="logo"/>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">My Account</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Schedule Fight</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Fight History</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Upcoming Fights</a>
          </li>
            </ul>
        
        </div>
      );
}
 
export default Sidebar;