import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import planetInfo from '../data/planet-info';

const PlanetDetail = () => {
    const { planet } = useParams();
    const navigate = useNavigate();
    const [planetData, setPlanetData] = useState(null);
    const planetAdditionalInfo = planetInfo.find((p) => p.name.toLowerCase() === planet);
    
    useEffect(() => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
        .then((res) => res.json())
        .then((data) => setPlanetData(data));
    }, [planet]);
    
    if (!planetData) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='planet-detail'>
            <button className='back-button' onClick={() => navigate(-1)}>Go back</button>
            <h2>{planetData.englishName}</h2>
            <p className='descr'>{planetAdditionalInfo.description}</p>
            <h4>General information:</h4>
            <div className='general-info'>
                <div className='info-labels'>
                    <p>Mass:</p>
                    <p>Size:</p>
                    <p>Gravity:</p>
                    <p>Temperature:</p>
                    <p>Density:</p>
                    <p>Distance from the Sun:</p>
                    <p>Revolution period:</p>
                    <p>Amount of moons:</p>
                </div>
                <div className='info-values'>
                    <p>{planetData.mass.massValue} {planetData.mass.massExponent} kg</p>
                    <p>{planetData.meanRadius} km</p>
                    <p>{planetData.gravity} m/s²</p>
                    <p>{Math.round(planetData.avgTemp - 273.15)}°C</p>
                    <p>{planetData.density} g/cm³</p>
                    <p>{planetData.semimajorAxis} km</p>
                    <p>{planetData.sideralOrbit} days</p>
                    <p>{planetData.moons ? planetData.moons.length : 0}</p>
                </div>
            </div>
            <div className='planet-image'>
                <img src={planetAdditionalInfo.image} alt={planet} />
            </div>
        </div>
    );
};

export default PlanetDetail;