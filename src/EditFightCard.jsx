import React, { useState } from "react";

const EditFightCard = ({id,fighters,currentUser,updateFight,deleteFight}) => {
  const [wage, setWage] = useState(0);
  const [fightday, setFightDay] = useState("");
    const [fightee_id, setFightee_id] = useState("");

  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    fetch(`http://localhost:3000/fights/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fighter_id: currentUser.id,
        fightee_id: fightee_id,
        wage: wage,
        fightday: fightday,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        updateFight(response);
      });
  };

  const handleChange = (e) => {
    setFightee_id(e.target.value);
  };


  function handleDelete () {
    fetch(`http://localhost:3000/fights/${id}`, {
        method: "DELETE",
      })
      deleteFight(id)
}


  return (
    <div>
      <form onSubmit={handleSubmit} className="new-fighter">
        <label className="wage"></label>
        <input
          type="number"
          className="wage"
          placeholder="$$$"
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
        <select value={fightee_id} onChange={handleChange}>
          {fighters.map((fighter) => (
            <option value={fighter.id} key={fighter.id} id={fighter.id}>
              {fighter.username}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>

        <button onClick={handleDelete }>🗑</button>
      </form>
    </div>
  );
};

export default EditFightCard;
