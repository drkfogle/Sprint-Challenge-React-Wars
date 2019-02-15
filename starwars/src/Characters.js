import React from 'react';

function characters(props) {
    return (
        <div>
            <div>
                <h3>{props.chars.name}</h3>
            <p>
            Height:{props.chars.height}
            </p>
            <p>
            Species: {props.chars.species}
            </p>
            <p>
            Mass: {props.chars.mass}
            </p>
            </div>
        </div>
    )
}

export default characters