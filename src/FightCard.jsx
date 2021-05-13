import React, {useState} from 'react'
import EditFightCard from './EditFightCard'
import FighterCard from './FighterCard'
import './FightCard.css'

const FightCard = ({id, fighter, fightee, wage, fightday,fighters,currentUser,updateFight,deleteFight}) => {
    console.log(id)





    return (
      
        <div className="container" >
            <span className= "fight-fighter">
                <FighterCard
                username={fighter.username}
                fightstyle={fighter.fightstyle}
                image={fighter.image}
                weightclass={fighter.weightclass}
                cellnum={fighter.cellnum}

            
            />  
        </span>
             
          
            <span className="details" >
                <h1>VS</h1>
                <h2> Bet Placed On Fight</h2>
                <h2>{wage}</h2>
                <h2>Date Of Fight</h2>
            <h3>{fightday}</h3>
              </span>
                    
        
           
            <span className="fight-fightee">
            <FighterCard
                username={fightee.username}
                fightstyle={fightee.fightstyle}
                image={fightee.image}
                weightclass={fightee.weightclass}
                cellnum={fightee.cellnum}
            />
                </span>
                
            {currentUser ? <>
                <EditFightCard deleteFight={deleteFight} updateFight={updateFight} fighters={fighters} currentUser={currentUser} id={id} />
            </> : ' '}

        </div>
    )
}

export default FightCard
