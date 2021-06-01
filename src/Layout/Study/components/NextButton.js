import React from 'react';
import {useHistory} from 'react-router-dom';

const NextButton = ({front, setFront, cardIndex, setCardIndex, deckLength}) => {

    const history = useHistory();

    const handleNext = () => {
        setCardIndex(cardIndex+1)
        if(cardIndex+1 === deckLength){
           let response = window.confirm('The deck has ended. \n Restart? \n Cancel returns home.')
            if(response){
                setCardIndex(0)
            } else history.push('/')
        }
        setFront(true)
    } 
    
    
    if(!front){
        return(
        <button
        className='btn mt-3'
        style={{backgroundColor: '#98d0d9'}}
        onClick={handleNext}>
        ⏭ Next
        </button>
        )
    } 
    return(<div></div>)
}

export default NextButton