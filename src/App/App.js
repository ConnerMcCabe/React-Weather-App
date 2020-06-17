import React, { useState } from 'react';
import Titles from "../component/Titles";
import { getWeather } from "../api/fetchWeather"
import './App.css';


const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async(e) => {
    if(e.key === 'Enter') {
      const data = await getWeather(query)
      setWeather(data);
      setQuery('');
    }
  }
    return (
      <div className="main-container">
        <Titles />
        <input 
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
        />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;F</sup>
            </div>
          </div>
        )}
      </div>
    );
  }
  


export default App;
