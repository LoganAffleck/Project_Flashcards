import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const Breadcrumbs = ({deck, name, cardId}) => {


    const {path} = useRouteMatch();


    const breadcrumbsPath = [{link:'/', to: '🏠 Home'}];

    const ConditionalItems = () => {
        if(path.includes('/:deckId')){
            breadcrumbsPath.push({link:`/decks/${deck.id}`, to: `🃏 ${deck.name}`});
            if (path.includes('edit')){
                if (path.includes('cards')){
                    breadcrumbsPath.push({link:`/decks/${deck.id}/${cardId}/edit`, to: `✏ Edit Card ${cardId}`})
                } else 
                breadcrumbsPath.push({link:`/decks/${deck.id}/edit`, to: `✏ Edit Deck`})
            } else if (path.includes('cards')){
                breadcrumbsPath.push({link:`/decks/new`, to: `➕ Create Card`})
            } else if (path.includes('study')) { 
                breadcrumbsPath.push({link:`/decks/${deck.id}/study`, to: `📚 Study`});}
        } else {
        breadcrumbsPath.push({link:`/decks/new`, to: `🃏 Create Deck`})
        breadcrumbsPath.push({link:`/decks/new`, to: `🗃 ${name}`})
        }
        
        return (
        <div style={{display:'flex'}}>
        {breadcrumbsPath.map((item, index, array)=>{
            if (index === array.length -1) {
            return(
            <li className='breadcrumb-item active' key={index}>
                    {item.to}
            </li>)
            } 
            return(
                <li className='breadcrumb-item' key={index}>
                    <Link to={item.link}>
                        {item.to}
                    </Link>
                </li>)
        })}

        </div>
        )
       
    }

    return(
        <nav className="breadcrumb" >
                <ul style={{margin: '0', padding: '0', display: 'flex', alignContent: 'center'}}>
                    <ConditionalItems/>
                </ul>
        </nav>
    );

}

export default Breadcrumbs;