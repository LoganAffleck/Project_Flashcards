import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import Breadcrumbs from "../Breadcrumbs";
import {createDeck} from "../../utils/api"

const Create = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = async () =>{
        let deck = {name: name, description: description}
        await createDeck(deck)
        history.push('/')
    }

    return(
        <div>
        <Breadcrumbs name={name}/>
        <div className='card p-3'>
            <h2>Create Deck</h2>
            <form className='form-group'>

                <label htmlFor='name'>Name:</label>

                <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}
                placeholder='Deck Name'className='form-control'>
                </input>

                <label htmlFor='description' className='mt-3'>Description:</label>

                <textarea type='textarea' name='description' id='description' 
                className='form-control' rows='5'
                value={description} onChange={(e)=>setDescription(e.target.value)}>
                </textarea>

            </form>
        </div>
        <button className='btn mt-3' htmlFor='submit'
        onClick={handleSubmit}
        >
        ✔ Submit
        </button>
        <Link to='/'>
            <button className='btn mt-3'
            style={{opacity:'50%'}}>
            ❌Cancel
            </button>
        </Link>
        </div>
    )
}

export default Create;