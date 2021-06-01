import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {readDeck, createCard} from '../../utils/api'
import Breadcrumbs from '../Breadcrumbs';

const CreateCard = () => {

    let {deckId} = useParams();
    console.log(deckId)
    let [deck, setDeck] = useState([])
    let [front, setFront] = useState('')
    let [back, setBack] = useState('')

    useEffect(()=>{
        const fetchDeck = async () => {
            let data = await readDeck(deckId);
            let deck = await data;
            setDeck(deck);
        }
        fetchDeck();
    }, [])

    const handleSubmit = async () => {
        let card = {front: front, back: back}
        await createCard(deckId, card)
        setFront('');
        setBack('');
    }

    return (
        <div>
            <Breadcrumbs deck={deck} />
            <div className='card p-3'>
            <h3>{deck.name}</h3>
            <h3>Add Card</h3>

            <form className='form-group'>
                <label htmlFor='front'>Front:</label>
                <textarea className='form-control'type='text' name='front' value={front} onChange={(e)=>setFront(e.target.value)}></textarea>
                <label htmlFor='back'>Back:</label>
                <textarea className='form-control'type='text' name='back' value={back} onChange={(e)=>setBack(e.target.value)}></textarea>
            </form>
            </div>

            <button className='btn mt-3' onClick={handleSubmit}>💾 Save</button>
            <Link to={`/${deck.id}/`}><button className='btn mt-3' style={{opacity:'50%'}}>✔ Done</button></Link>
        </div>
    );
}

export default CreateCard;