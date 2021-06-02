import  React, {useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { readDeck } from '../../utils/api';

import StudyCard from './components/StudyCard';
import Breadcrumbs from '../Breadcrumbs';
import NextButton from './components/NextButton';

const Study = () => {
    const {deckId} = useParams();
    const [deck, setDeck] = useState({});
    const [cardIndex, setCardIndex] = useState(0);
    const [front, setFront] = useState(true);

    useEffect( () => {
        const getDeck = async () => {
            const data = await readDeck(deckId);
            let deckData =  await data;
            setDeck(deckData);
    }
        getDeck();
        
    }, [deckId])

    if (deck.name) {

    let {cards} = deck
    let deckLength = cards.length
    let currentCard = cards.find((card, index) => index === cardIndex )



    return(
        <>
            <Breadcrumbs deck={deck}/>
            <h2>Study:</h2>
            <h3>{deck.name}</h3>

            <StudyCard
            deckId={deckId}
            cardIndex={cardIndex}
            deckLength={deckLength}
            front={front}
            setFront={setFront}
            currentCard={currentCard}
            />

            <NextButton 
            front={front}
            setFront={setFront}
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            deckLength={deckLength}
            />


        </>
    );

} else return(<p>Loading...</p>)

}

export default Study;