import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GiCoinsPile } from 'react-icons/gi';
import './FighterPage.css';



const FighterPage = ({fighterData}) => {
    const [fighterPage, setFighterPage] = useState(null)
    const {id} = useParams();
    console.log(fighterPage)
    console.log()


    useEffect(()=> {
        fetch(`http://localhost:3000/users/${id}`)
            .then(response => response.json())
            .then(fighterPage => setFighterPage(fighterPage))
            // setIsLoaded(true)
    }, [id])

    return (
        <div className="container" data-tilt>
        <main className="grid">
                <article>
                    {fighterPage ? <>
                        <img src={fighterPage.image} alt={fighterPage.username} />
                <div className="text">
                            <h2>{fighterPage.username}</h2>
                            <h3>{fighterPage.weightclass}</h3>
                            <h3>{fighterPage.fightstyle}</h3>
                            <p>{fighterPage.cellnum}</p>
                            
                  
                </div>
                        
                    </> : ''}

            </article>
        </main>
    </div>

    )
}

export default FighterPage
