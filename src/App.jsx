import React, { useState } from 'react';
import weatherdata from './weatherBit-sample-data.json';
import './App.css';
import Card from './components/Card';
import Weather from './components/Weather';
import Form from './components/Form';

function App() {
  const [location, setLocation] = useState('Stockton, CA');
  const [newLocation, setNewLocation] = useState('');
  const [weather] = useState(weatherdata.data);
  const [oneweather, setOneWeather] = useState({});
  const [displayCard, setDisplayCard] = useState(false);
  const showInfo = (id) => {
    setOneWeather(weather[id]);
    setDisplayCard(true);
  };
  const handleLocationChange = (e) => {
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  };
  // console.log(weather);
  return (
    <div className="container">
      <Form
        location={location}
        newLocation={newLocation}
        setNewLocation={setNewLocation}
        handleLocationChange={handleLocationChange}
      />
      <Weather weather={weather} showInfo={showInfo} />
      {displayCard && <Card oneweather={oneweather} />}
    </div>
  );
}

export default App;
