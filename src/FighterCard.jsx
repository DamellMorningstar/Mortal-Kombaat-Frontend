import React from 'react'
import './FighterCard.css'
import NewFightForm from './NewFightForm'

const FighterCard = ({ id, username, weightclass, image, fightstyle, cellnum,currentUser,fighters}) => {
    
    return (
        <div className="card" data-tilt>
            <div className="grid">
                <article>
                    <img src={image} alt={username} />
                    <div className="text">
                        <h3>{username}</h3>
                        <h4>{weightclass}</h4>
                        <p>{fightstyle}</p>
                        <p>{cellnum}</p>
                        <button >Fight Me 🥋</button>
                    </div>
                </article>
            </div>
        </div>
        
    )
}
<script type="text/javascript" src="vanilla-tilt.js"></script>

export default FighterCard
