import React from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            <p><strong>Born:</strong> {props.character.birth_year}</p>
        </div>
    )
}

export default CharacterCard;