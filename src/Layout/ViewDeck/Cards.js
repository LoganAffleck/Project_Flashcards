import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import {deleteCard} from '../../utils/api';

const Cards = ({cards, deck}) => {
const history = useHistory();

const handleDelete = (e) => {
    console.log(e.target.id)
        let confirm = window.confirm(`Delete this card? \n You will not be able to recover it.`)
        let cardToDelete = cards.find((card) => card.id == e.target.id)
        console.log(cardToDelete)
        
        if (confirm){
            deleteCard(cardToDelete.id)
            history.go(0)
        }
     }

if(cards){

    return(
        <div className="container">
            <h4>Cards</h4>
            {
                cards.map((card, index)=>(
                    <div key={index} id={card.id}>
                        <div style={{display: 'flex'}}>
                            <div className='card m-2 p-2' style={{flex: ".5"}}>
                                <p style={{opacity:'50%'}}>Prompt</p>
                                <p>{card.front}</p>
                            </div>

                            <div className='card m-2 p-2'style={{flex: ".5"}}>
                                <p style={{opacity:'50%'}}>Answer</p>
                                <p>{card.back}</p>
                            </div>
                        </div>
                        <div className="mb-3" style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}><button className='btn'>✏ Edit</button></Link>
                            <button id={card.id} className='btn' onClick={handleDelete}>❌ Delete</button>
                        </div>

                    </div>

                ))
            }
        </div>
    )
} else return(<p>Loading...</p>)
}

export default Cards;