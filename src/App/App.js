import React from 'react';
import Titles from "../component/Titles";
import Form from "../component/Form";
import Weather from "../component/Weather";
import './App.css';

const city = '';
const API_KEY = '';

// 34:38 tbc
// ,${state},${country}

class App extends React.Component {

  getWeather = async (e) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json(); 
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  } 
   
} 
  


export default App;
