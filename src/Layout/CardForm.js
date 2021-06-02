import React from 'react';
import {Link} from 'react-router-dom';

const CardForm = (

    {deck, front, setFront, back, setBack, handleSubmit, edit}
    
) => {
    
    return (
        <div>
            <div className='card p-3'>
            <h3>{deck.name}</h3>
            <h3>{edit ? 'Edit Card' : 'Add Card'}</h3>

            <form className='form-group'>
                <label htmlFor='front'>Front:</label>
                <textarea className='form-control'type='text' name='front' value={front} onChange={(e)=>setFront(e.target.value)}></textarea>
                <label htmlFor='back'>Back:</label>
                <textarea className='form-control'type='text' name='back' value={back} onChange={(e)=>setBack(e.target.value)}></textarea>
            </form>
            </div>

            <button className='btn mt-3' onClick={handleSubmit}>💾 Save</button>
            <Link to={`/decks/${deck.id}`}><button className='btn mt-3' style={{opacity:'50%'}}>✔ Done</button></Link>
        </div>
    );
}

export default CardForm