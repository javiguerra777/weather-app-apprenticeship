/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import Weather from '../components/Weather';
import Form from '../components/Form';
import getLocation, { getWeatherData } from '../utils/api';
import ErrorContext from '../utils/context';

function Main() {
  const symbol = '℉';
  const { error, setError } = useContext(ErrorContext);
  const [location, setLocation] = useState('Stockton, CA');
  const [newLocation, setNewLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [oneweather, setOneWeather] = useState({});
  const [displayCard, setDisplayCard] = useState(false);
  const [displayLoc, setDisplayLoc] = useState('');
  const [activeDiv, setActiveDiv] = useState(-1);
  if (error) {
    throw Error(
      `Invalid search option you searched for ${location} which is an invalid location`,
    );
  }
  useEffect(() => {
    getLocation(location).then((res) => {
      if (res.data.length === 0) {
        setError(true);
        return false;
      }
      setDisplayLoc(res.data[0].display_name);
      getWeatherData(res.data[0].lat, res.data[0].lon).then(
        (response) => setWeather(response.data),
      );
      return true;
    });
  }, [location, setError]);

  const showInfo = (id) => {
    setOneWeather(weather.daily[id]);
    setDisplayCard(true);
    setActiveDiv(id);
  };
  const handleLocationChange = (e) => {
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
    setDisplayCard(false);
    setActiveDiv(-1);
  };
  return (
    <div className="container">
      <Form
        location={location}
        newLocation={newLocation}
        setNewLocation={setNewLocation}
        handleLocationChange={handleLocationChange}
        displayLoc={displayLoc}
      />
      <Weather
        weather={weather}
        showInfo={showInfo}
        symbol={symbol}
        activeDiv={activeDiv}
      />
      {displayCard ? (
        <Card oneweather={oneweather} symbol={symbol} />
      ) : (
        <h3>Click on a day above to view details</h3>
      )}
    </div>
  );
}

export default Main;
