import React, { useState } from 'react';
import Titles from "../component/Titles";
import Weather from "../component/Weather";
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
          <Weather />
        )}
      </div>
    );
  }
  


export default App;
