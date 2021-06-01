import React, {useEffect, useState} from 'react';
import {useParams, Link, useHistory, useRouteMatch} from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import {readDeck, readCard, updateCard} from '../../utils/api';

const EditCard = () => {
let {deckId} = useParams();
let {cardId} = useParams();
let history = useHistory();
let [deck, setDeck] = useState({});
let [card, setCard] = useState({});
let [front, setFront] = useState('');
let [back, setBack] = useState('');


    useEffect(()=>{
        const fetchData = async () =>{
            let data = await readDeck(deckId);
            let deckData = await data;
            let cardData = await readCard(cardId)
            setDeck(deckData);
            setCard(cardData);
            setFront(cardData.front);
            setBack(cardData.back);

        }
        fetchData();
    },[])

    const handleSubmit = async () => {
        card.front = front;
        card.back = back;
        await updateCard(card);
        history.push(`/${deckId}/view`)
    }

if(card.id){
    return(
        <div>
            <Breadcrumbs deck={deck} cardId={cardId}/>

            <form className='form-group'>
                <label htmlFor='front'>Front:</label>
                <textarea className='form-control'type='text' name='front' value={front} onChange={(e)=>setFront(e.target.value)}></textarea>
                <label htmlFor='back'>Back:</label>
                <textarea className='form-control'type='text' name='back' value={back} onChange={(e)=>setBack(e.target.value)}></textarea>
            </form>
            

            <button className='btn mt-3' onClick={handleSubmit}>💾 Save</button>
            <Link to={`/${deck.id}/view`}><button className='btn mt-3' style={{opacity:'50%'}}>❌ Cancel</button></Link>

        </div>
    );
} return (<p>Loading...</p>)
}

export default EditCard;