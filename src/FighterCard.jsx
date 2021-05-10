import React, {useState,useEffect} from 'react'
import './FighterCard.css'
import NewFightForm from './NewFightForm'
import FighterPage from './FighterPage'
import { Link, useHistory } from "react-router-dom";


const FighterCard = ({ id, username, weightclass, image, fightstyle, cellnum,currentUser,fighters}) => {
    const [fighterPage, setFighterPage] = useState(null)
    const [dontlook, setDontLook] = useState(true)

    const history = useHistory();
    
    const handleClick = () => {
        console.log(username)


            fetch(`http://localhost:3000/users/${id}`)
            .then((response) => response.json())
            .then(fighter => setFighterPage(fighter))

            history.push('/fighter')

    }
    return (
        <div className="container" data-tilt>
            <div className="card">
                <div className="box">
                    <img src={image } onClick={handleClick} />
                    <div className="content">
                        <h2>{username}</h2>
                        {dontlook? null:  <FighterPage username={username} fighterPage={fighterPage} />}
                    </div>
                </div>
          </div>
        </div>
        
    )
}
<script type="text/javascript" src="vanilla-tilt.js"></script>

export default FighterCard
