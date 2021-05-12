import React, { useState } from 'react'
import './NewFightForm.css'


const NewFightForm = ({ fighters,currentUser,addNewFight}) => {
    const [wage, setWage] = useState(0)
    const [fightday, setFightDay] = useState('')
    const [fightee_id, setFightee_id] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')

        fetch(`http://localhost:3000/fights`, { 
            method:'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fighter_id: currentUser.id,
                fightee_id: fightee_id,
                wage: wage,
                fightday: fightday

            })

        }) .then(response => response.json())
           .then(response => {
            addNewFight(response)
   
           })

    }
    console.log(fighters)
  
    const handleChange = (e) => {
        setFightee_id(e.target.value)    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} className="new-fighter">
            <div className="logo"></div>
          <div className="title">MortalKombaat</div>
          <div className="sub-title">Beta</div>
                <div className="fields">
                <label className="wage"></label>
        <input
          type="number"
          className="wage"
          placeholder="Enter Bet"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />


        <label className="fightday"></label>

        <input
          type="date"
          className="fightday"
          placeholder="..."
          value={fightday}
          onChange={(e) => setFightDay(e.target.value)}
                />
                
                <label>Select Opponent </label>
                    <select
                    value={fightee_id}
                    onChange={handleChange}>
                    {fighters.map((fighter) => <option className="opponent" value={fighter.id }key={fighter.id} id={fighter.id}>{fighter.username}</option>)  }
                    </select>
  
        <button type="submit">Submit</button>
        </div>
      </form>
            
        </div>
    )
}

export default NewFightForm
