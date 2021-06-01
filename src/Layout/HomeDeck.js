import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { deleteDeck, listDecks } from "../utils/api";


const HomeDeck = () => {
    const [decks, setDecks] = useState([])
    
    useEffect(()=> {
        const getDecks = async () => {
            const data = await listDecks();
            let deckData =  data;
            setDecks([...deckData])
        }

        getDecks();
        
    },[])
    
    if (decks===[]){
        return(<p>Loading decks...</p>)
    }

    const handleDeckDelete = (e) => {
        let deckToDelete = decks.find((deck) => deck.id == e.target.parentElement.parentElement.id)
        let futureDecks = decks.filter(deck => deck !== deckToDelete)
        let confirm = window.confirm(`Do you want to delete the deck "${deckToDelete.name}"? \n\n This is permanent.`)

        if(confirm){
            deleteDeck(deckToDelete.id)
            setDecks([...futureDecks])
        }
    }

    return(
        <div id="homeDeck"className='container mb-5'style={{color: '#585e66'}}>
            
            <Link to='/decks/new'>
                <button className="btn border"
                > ➕ Create Deck </button>
            </Link>

            <div id = "decksContainer">

                {decks.map((deck)=>(
                    <div className="card rounded-50 p-3 mt-3" id={deck.id} key={deck.id}>
                        <h2> {deck.name} </h2>
                        <p> {deck.description} </p>
                        <p>{`${deck.cards.length} cards`}</p>
                        <hr/>
                        <div id="buttons"style={{display:"flex", justifyContent:"space-between"}}>
                            <div style={{display: 'flex'}} >
                                <Link to={`/decks/${deck.id}`}>
                                <button className='btn mr-3'
                                style={{backgroundColor: '#badee3'}}>
                                👀 View 
                                </button>
                                </Link>

                                <Link to={`/decks/${deck.id}/study`}>
                                <button className='btn'
                                style={{backgroundColor: '#e3c79a'}}>
                                📚 Study 
                                </button>
                                </Link>
                            </div>
                            <button className="btn" 
                            onClick={handleDeckDelete}
                            > ✖ Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeDeck;