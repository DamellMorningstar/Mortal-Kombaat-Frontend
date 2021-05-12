import React from 'react'
import FighterCard from './FighterCard'
import NewFightForm from './NewFightForm'


const FighterContainer = ({ fighters, currentUser }) => {
    const allFighters = fighters.map(fighter => {
        return <FighterCard
            fighters={fighters}
            key={fighter.id}
            id={fighter.id}
            username={fighter.username}
            weightclass={fighter.weightclass}
            cellnum={fighter.cellnum}
            fightstyle={fighter.fightstyle}
            image={fighter.image}
            currentUser={currentUser}
        />
    })
    return (
        <div className="allFighters" >
       
            {allFighters}
        </div>
    )
}

export default FighterContainer
