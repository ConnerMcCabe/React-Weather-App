import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
      </div>
    )
  }
}

export default Weather; 