import React from 'react';

let ReduxCounter = ({ value, increment }) => {
    return <h1 onClick={ increment }>{ value }</h1>
}

export default ReduxCounter;
