import React, {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs';
import {readDeck, updateDeck} from '../../utils/api';

const EditDeck = () => {
    const {deckId} = useParams();
    const [deck, setDeck] = useState({});
    const [name, setName] = useState(null);
    const [description, setDescription] = useState('');
    const history = useHistory();
    

    useEffect( () => {
        const getDeck = async () => {
            const data = await readDeck(deckId);
            let deckData =  await data;
            setDeck(deckData);
            let name = await deckData.name;
            setName(name);
            let description = await deckData.description;
            setDescription(description);
    }
        getDeck();
        
    }, [deckId])

    const handleSubmit = async () => {
        deck.description = description;
        deck.name = name;
        await updateDeck(deck)
        history.goBack();
    }


if(name !== null){

    console.log(deck)

    return(
        <div>
        <Breadcrumbs deck={deck}/>

        <div className='card p-3'>
                <h2>Edit Deck: <br/><span style={{opacity:'50%'}}>{name}</span></h2>
                <form className='form-group'>

                    <label htmlFor='name'>Name:</label>

                    <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}
                    placeholder='Deck Name'className='form-control'>
                    </input>

                    <label htmlFor='description' className='mt-3'>Description:</label>

                    <textarea type='textarea' name='description' id='description' 
                    className='form-control' rows='3'
                    value={description} onChange={(e)=>setDescription(e.target.value)}>
                    </textarea>

                </form>
            </div>
            <button className='btn mt-3' htmlFor='submit'
            style={{border:'3px'}}
            onClick={handleSubmit}
            >
            ✔ Submit
            </button>
            <Link to={`/decks/${deck.id}`}>
                <button className='btn mt-3'
                style={{opacity:'50%'}}>
                ❌Cancel
                </button>
            </Link>
        </div>
    );
} else return(<p>Loading!</p>)
};

export default EditDeck;