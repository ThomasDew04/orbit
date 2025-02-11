// Planet detail page:
// Detailed information is shown for each planet using 
// this API: https://api.le-systeme-solaire.net/rest/bodies/{planet}

// Info shown:
// - English name of the planet
// - Mass
// - Size
// - Gravity
// - Temperature
// - Density
// - Distance from the Sun
// - Revolution period
// - Amount of moons

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
    const { planet } = useParams();
    const [planetData, setPlanetData] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then((res) => res.json())
        .then((data) => setPlanetData(data));
    }, [planet]);
    
    if (!planetData) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="planet-detail">
            <h1>{planetData.englishName}</h1>
            <p>Mass: {planetData.mass.massValue} {planetData.mass.massExponent} kg</p>
            <p>Size: {planetData.meanRadius} km</p>
            <p>Gravity: {planetData.gravity} m/s²</p>
            <p>Temperature: {planetData.avgTemp} K</p>
            <p>Density: {planetData.density} g/cm³</p>
            <p>Distance from the Sun: {planetData.semimajorAxis} km</p>
            <p>Revolution period: {planetData.sideralOrbit} days</p>
            <p>Amount of moons: {planetData.moons ? planetData.moons.length : 0}</p>
        </div>
    );
};

export default PlanetDetail;
