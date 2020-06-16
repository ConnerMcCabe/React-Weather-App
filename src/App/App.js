import React, { useState } from 'react';
import Titles from "../component/Titles";
import Form from "../component/Form";
import Weather from "../component/Weather";
import { getWeather } from "../api/fetchWeather"
import './App.css';


const App = () => {
  const [query, setQuery] = useState('');

  const search = async(e) => {
    if(e.key === 'Enter') {
      const data = await getWeather(query)
      console.log(data)
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
        />
        
        <Form />
        <Weather />
      </div>
    );
  }
  


export default App;
