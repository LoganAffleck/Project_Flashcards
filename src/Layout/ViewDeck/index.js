import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import {readDeck} from '../../utils/api'

import DeckHeader from "./DeckHeader";
import Cards from './Cards'

const View = () =>{
    const {deckId} = useParams();
    const [deck, setDeck] = useState({});
    

    useEffect( () => {
        const getDeck = async () => {
            const data = await readDeck(deckId);
            let deckData =  await data;
            setDeck(deckData);
    }
        getDeck();
        
    }, [deckId])

if (deck){
    let {cards} = deck


    return(
        <div>
        <Breadcrumbs deck={deck}/>
        <DeckHeader deck={deck}/>
        <div>
            <Cards cards={cards} deck={deck}/>
        </div>
        </div>

    )
} else {return(<p>Loading...</p>)}
}

export default View;