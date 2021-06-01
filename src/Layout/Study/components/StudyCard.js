import React from 'react';
import {Link} from 'react-router-dom';

const StudyCard = ({deckId, cardIndex, deckLength, front, setFront, currentCard}) => {

    if (deckLength < 3){
        return (
        <div>
        <div className="card p-3 mt-3">
            <h4>Not Enough Cards.</h4>
            <p>{`You need at least 3 cards to study. There are ${deckLength} in this deck.`}</p>
        </div>
        
        <Link to={`/decks/${deckId}/cards/new`}>
        <button 
        className='btn mt-3'
        style={{backgroundColor: '#98d0d9'}}>
        ➕ Add Cards</button>
        </Link>
        </div>
        );
    }

    return(
        <div>
        <div className="card p-3 mt-3">
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4>Card {cardIndex+1} of {deckLength}</h4>
                <p style={{color:'lightgrey'}}> {front ? 'Front' : 'Back'} </p>
            </div>
            <p>{front ? `Prompt: ${currentCard.front}` : `Answer: ${currentCard.back}`}</p>
                
        </div>

        <button 
        className='btn mt-3 mr-3'
        style={{backgroundColor: 'lightgrey'}}
        onClick={()=>setFront(!front)}>
        🔀 Flip
        </button>
        </div>
    )
}

export default StudyCard;