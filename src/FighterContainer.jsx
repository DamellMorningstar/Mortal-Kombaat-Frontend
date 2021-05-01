import React from 'react'
import FighterCard from './FighterCard'


const FighterContainer = ({ fighters }) => {
    const allFighters = fighters.map(fighter => {
        return <FighterCard
            key={fighter.id}
            id={fighter.id}
            username={fighter.username}
            weightclass={fighter.weightclass}
            cellnum={fighter.cellnum}
            details={fighter.details}
            image={fighter.image}
        />
    })
    return (
        <div>
            {allFighters}
        </div>
    )
}

export default FighterContainer
