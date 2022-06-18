import React from 'react';
import Proptypes from 'prop-types';
import convertUnix from '../utils/functions';

function Card({ oneweather, symbol, testid }) {
  return (
    <div className="weather-card" data-testid={testid}>
      <h2>
        Forecast details for {convertUnix(oneweather.dt, true)}{' '}
        {convertUnix(oneweather.dt)}:{' '}
      </h2>
      <h2>
        {oneweather.temp.day}
        {symbol}
      </h2>
      <img
        id="image"
        src={`http://openweathermap.org/img/wn/${oneweather.weather[0].icon}@2x.png`}
        alt={oneweather.weather[0].main}
      />
      <h5>{oneweather.weather[0].description}</h5>
      <p>
        High: {oneweather.temp.max}
        {symbol} | Feels like during the day:{' '}
        {oneweather.feels_like.day}
        {symbol} <br />
        Low: {oneweather.temp.min}
        {symbol} | Feels like during the night:{' '}
        {oneweather.feels_like.night}
        {symbol} <br />
        Weather conditions: {oneweather.weather[0].main}
      </p>
    </div>
  );
}
Card.defaultProps = {
  oneweather: {},
  symbol: '',
  testid: '',
};
Card.propTypes = {
  oneweather: Proptypes.instanceOf(Object),
  symbol: Proptypes.string,
  testid: Proptypes.string,
};
export default Card;
