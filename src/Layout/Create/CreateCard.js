import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {readDeck, createCard} from '../../utils/api'
import Breadcrumbs from '../Breadcrumbs';
import CardForm from '../CardForm'

const CreateCard = () => {

    let {deckId} = useParams();
    console.log(deckId)
    let [deck, setDeck] = useState([])
    let [front, setFront] = useState('')
    let [back, setBack] = useState('')
    let edit = false;

    useEffect(()=>{
        const fetchDeck = async () => {
            let data = await readDeck(deckId);
            let deck = await data;
            setDeck(deck);
        }
        fetchDeck();
    }, [deckId])

    const handleSubmit = async () => {
        let card = {front: front, back: back}
        await createCard(deckId, card)
        setFront('');
        setBack('');
    }

    return (
        <div>
            <Breadcrumbs deck={deck} />
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
}

export default CreateCard;