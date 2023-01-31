import React from 'react';

const Country = ({ country }) => {
    const { area, region, name, flags,population } = country;
    return (
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <p>Population :{population}</p>
            <p>Area: {area}</p>
            <p>Region : {region }</p>
            <img src={flags.png} alt="" />
            
        </div>
    );
};

export default Country;