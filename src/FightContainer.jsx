import React, { useState, useEffect } from 'react'
import './FightContainer.css';
import FightCard from './FightCard'
import NewFightForm from './NewFightForm';
const FightContainer = ({fights, fighters,currentUser,setFights, updateFight}) => {


    const addNewFight = (newFight) => {
        const updatedFights = [...fights, newFight]
        setFights(updatedFights)
    }



    function deleteFight(id) {
        const updatedFightArray = fights.filter((fight) => fight.id !== id);
        setFights(updatedFightArray);
      }    
      
    const allFights = fights.map(fight => {
        return <FightCard
            key={fight.id}
            id={fight.id}
            fighter={fight.fighter}
            fightee={fight.fightee}
            wage={fight.wage}
            fightday={fight.fightday}
            fighters={fighters}
            currentUser={currentUser}
            updateFight={updateFight}
            deleteFight={deleteFight}
        />
    })
    console.log(fights)
    return (
        <div>
            <NewFightForm addNewFight={addNewFight} currentUser={currentUser} fighters={fighters}  />
            {allFights}
        </div>
    )
}

export default FightContainer
