import './CountCountry.css'
import React from 'react';

function CountCountry(props) {
    const count = props.count;
    const total = count.reduce((total,totalPopulation) => total+totalPopulation.population, 0)
    return (
        <div>
            <h3>Country Added: {count.length}</h3>
            <h3>Total Population : {total}</h3>
        </div>
    );
}

export default CountCountry;