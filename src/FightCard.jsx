import React, {useState} from 'react'
import EditFightCard from './EditFightCard'
import FighterCard from './FighterCard'

const FightCard = ({id, fighter, fightee, wage, fightday,fighters,currentUser,updateFight,deleteFight}) => {
    console.log(id)





    return (
        
        <div>
            <FighterCard
                username={fighter.username}
                fightstyle={fighter.fightstyle}
                image={fighter.image}
                weightclass={fighter.weightclass}
                cellnum={fighter.cellnum}

            
            />
            <h1>VS</h1>
            <h2>{wage}</h2>
            <h3>{fightday}</h3>
            <FighterCard
                username={fightee.username}
                fightstyle={fightee.fightstyle}
                image={fightee.image}
                weightclass={fightee.weightclass}
                cellnum={fightee.cellnum}
            />
            {currentUser ? <>
                <EditFightCard deleteFight={deleteFight} updateFight={updateFight} fighters={fighters} currentUser={currentUser} id={id} />
            </> : ' '}

        </div>
    )
}

export default FightCard
