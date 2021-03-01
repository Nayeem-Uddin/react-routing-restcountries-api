import './Country.css'

import React from 'react';

function Country(props) {
    // console.log(props.country);
    const {name, flag, capital, population, region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    // const countryP = props.country;
    // const total = countryP.reduce((total,countryPopu) => total + countryPopu.population, 0)
    // console.log(props);
    return (
        <div className='country-info'>
            <img src={flag} alt=""/>
            <h3>name : {name}</h3>
            <h3>capital : {capital}</h3>
            <h3>Population : {population}</h3>
            <h3>region : {region}</h3>
            <button onClick={()=> handleAddCountry(props.country)}>Add country</button>
        </div>
    );
}

export default Country;