import React from 'react';
import Titles from "../component/Titles";
import Form from "../component/Form";
import Weather from "../component/Weather";
import './App.css';


class App extends React.Component {

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
