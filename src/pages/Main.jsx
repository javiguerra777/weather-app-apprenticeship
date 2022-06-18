import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Weather from '../components/Weather';
import Form from '../components/Form';
import getLocation, { getWeatherData } from '../utils/api';
import { toggleError } from '../store/errorSlice';
import { changeNewLocation } from '../store/locationSlice';

function Main() {
  const symbol = '℉';
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.value);
  const location = useSelector((state) => state.location.value);
  const [weather, setWeather] = useState({});
  const [oneweather, setOneWeather] = useState({});
  const [displayCard, setDisplayCard] = useState(false);
  const [displayLoc, setDisplayLoc] = useState('');
  const [activeDiv, setActiveDiv] = useState(-1);
  const errorChecker = () => {
    if (error) {
      throw Error('Invalid Search options');
    }
  };
  useEffect(() => {
    getLocation(location).then((res) => {
      // throws error if search is invalid
      if (res.data.length === 0) {
        dispatch(toggleError());
        return false;
      }
      // from geocode api first api call
      setDisplayLoc(res.data[0].display_name);
      // second api call to get weather data
      getWeatherData(res.data[0].lat, res.data[0].lon).then(
        (response) => setWeather(response.data),
      );
      return true;
    });
  }, [location, dispatch]);
  const showInfo = (id) => {
    setOneWeather(weather.daily[id]);
    setDisplayCard(true);
    setActiveDiv(id);
  };
  const handleLocationChange = (e) => {
    e.preventDefault();
    dispatch(changeNewLocation(''));
    setDisplayCard(false);
    setActiveDiv(-1);
  };
  errorChecker();
  return (
    <div className="container" role="main">
      <Form
        handleLocationChange={handleLocationChange}
        displayLoc={displayLoc}
        testid="form-component"
      />
      <Weather
        weather={weather}
        showInfo={showInfo}
        symbol={symbol}
        activeDiv={activeDiv}
        testid="weather-component"
      />
      {displayCard ? (
        <Card
          oneweather={oneweather}
          symbol={symbol}
          testid="card-component"
        />
      ) : (
        <h3 data-testid="day-message">
          Click on a day above to view details
        </h3>
      )}
    </div>
  );
}

export default Main;
