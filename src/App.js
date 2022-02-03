import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [current, setCurrent] = useState({});
    const [tog, setTog] = useState(false);


    
    const search = async (e) => {
        if(e.key === 'Enter') {
            setTog(false);

            const data = await fetchWeather(query);


            setWeather(data);
            console.log(data)
            setCurrent(data.currentConditions);
            setTog(true);



            setQuery('');


        }
    }
if (tog==true){


    return (
        

        <div className="main-container">
            <input type="text"className="search"placeholder="Search city, major town..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
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
                    else{
                        return(
                            <div className="main-container">
                            <input type="text"className="search"placeholder="Search city, major town..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
                
                        <div style={{color:'white',textAlign:'center'}}><h3>Search weather for a valid country, state, city or major town</h3></div>
                        </div>
                        )
                    }
                
}
                   

export default App;