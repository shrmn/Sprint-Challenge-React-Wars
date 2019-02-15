import React from 'react';
import './StarWars.css';
import FilmNames from './FilmNames';

const CharacterCard = ({character}) => {
    const { name, birth_year, films} = character
    return (
        <div className="character-card">
            <h2>{name}</h2>
            <p><strong>Born:</strong> {birth_year}</p>
            <FilmNames 
            films={films}
            />
        </div>
    )
}

export default CharacterCard;