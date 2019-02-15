import React from 'react';
import './Characters.css';


function characters(props) {
    return (
        <div>
            <div>
                <h3>{props.chars.name}</h3>
            <p class= 'height'>
            <strong>Height:{props.chars.height}</strong>
            </p>
            <p class= 'birth'>
            <strong>Birth Year: {props.chars.birth_year}</strong>
            </p>
            <p class= 'mass'>
            <strong>Mass: {props.chars.mass}</strong>
            </p>
            </div>
        </div>
    )
}

export default characters