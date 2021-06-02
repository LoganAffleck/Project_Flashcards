import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import {readDeck, readCard, updateCard} from '../../utils/api';
import CardForm from '../CardForm';

const EditCard = () => {
let {deckId} = useParams();
let {cardId} = useParams();
let history = useHistory();
let [deck, setDeck] = useState({});
let [card, setCard] = useState({});
let [front, setFront] = useState('');
let [back, setBack] = useState('');
let edit = true;

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
    },[cardId, deckId])

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

            <CardForm 
            deck={deck}
            front={front}
            setFront={setFront}
            back={back}
            setBack={setBack}
            handleSubmit={handleSubmit}
            edit={edit}
            />
        </div>
    );
} return (<p>Loading...</p>)
}

export default EditCard;