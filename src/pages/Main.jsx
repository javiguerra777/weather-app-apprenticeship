import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import Weather from '../components/Weather';
import Form from '../components/Form';
import getLocation, { getWeatherData } from '../utils/api';

function Main() {
  const [location, setLocation] = useState('Stockton, CA');
  const [newLocation, setNewLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [oneweather, setOneWeather] = useState({});
  const [displayCard, setDisplayCard] = useState(false);
  useEffect(() => {
    getLocation(location).then((res) => {
      getWeatherData(res.data[0].lat, res.data[0].lon).then(
        (response) => setWeather(response.data),
      );
    });
  }, [location]);
  const showInfo = (id) => {
    setOneWeather(weather.daily[id]);
    setDisplayCard(true);
  };
  const handleLocationChange = (e) => {
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  };
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

export default Main;
