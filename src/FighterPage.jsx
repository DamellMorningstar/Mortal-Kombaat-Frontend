import React, { useState, useEffect } from 'react'
import { GiCoinsPile } from 'react-icons/gi';
import './FighterPage.css';



const FighterPage = ({ fighterPage,username }) => {
    console.log(username)

    return (
        <div className="container" data-tilt>
        <div className="card">
            <div className="box">
                {/* <img src={fighterPage }  /> */}
                <div className="content">
                    {/* <h2>{fighterPage}</h2> */}
                </div>
            </div>
      </div>
    </div>
    )
}

export default FighterPage
