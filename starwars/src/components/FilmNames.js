import React from 'react';
import axios from 'axios';

const FilmNames = ({ films }) => {
    const filmnames = async () => {
        const titles = await Promise.all(films.map(film => axios.get(film).then(res => res.data.title)))
        return titles.map(title => <p>{title}</p>);
    }
    filmnames();
    return (
        <p>film</p>
    )
}

export default FilmNames;