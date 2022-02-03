import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [current, setCurrent] = useState({});

    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);


            setWeather(data);
            setCurrent(data.currentConditions);


            setQuery('');

        }
    }


    return (
        

        <div className="main-container">
            <input type="text"className="search"placeholder="Search city,town ..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather&& (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.resolvedAddress}</span>
                        <sup>{weather.timezone}</sup>
                    </h2>
                    <div className="city-temp">
                        {
                            
                            (((current.temp) - 32) * 5/9).toFixed(1)
                        }
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <p>{weather.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
                
}
                   

export default App;