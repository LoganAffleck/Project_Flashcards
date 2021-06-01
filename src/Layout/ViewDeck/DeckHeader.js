import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {listDecks} from '../../utils/api';
import {deleteDeck} from '../../utils/api';

const DeckHeader = ({deck}) => {
    const [decks, setDecks] = useState([])
    
    useEffect(()=> {
        const getDecks = async () => {
            const data = await listDecks();
            let deckData =  data;
            setDecks([...deckData])
        }

        getDecks();
        
    },[])

    const handleDeckDelete = () =>{
            let deckToDelete = deck
            let futureDecks = decks.filter(deck => deck !== deckToDelete)
            let confirm = window.confirm(`Do you want to delete the deck "${deckToDelete.name}"? \n\n This is permanent.`)
    
            if(confirm){
                deleteDeck(deckToDelete.id)
                setDecks([...futureDecks])
            }
        }
    

    return (
        <div className='container'>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to={`/decks/${deck.id}/edit`}><button className='btn'>✏ Edit</button></Link>
            <Link to={`/decks/${deck.id}/study`}> <button className='btn'>📚 Study</button> </Link>
            <Link to={`/decks/${deck.id}/cards/new`}><button className='btn'>➕ Add Cards</button></Link>
            <button className='btn' onClick={handleDeckDelete}>❌ Delete</button>
        </div>
        <hr/>
        </div>
    );
}

export default DeckHeader;