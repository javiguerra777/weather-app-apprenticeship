import React from 'react';
import Proptypes from 'prop-types';
import convertUnix from '../utils/functions';

function Card({ oneweather, symbol }) {
  return (
    <div className="weather-card">
      <h2>Forecast details for {convertUnix(oneweather.dt)}: </h2>
      <h2>
        {oneweather.temp.day}
        {symbol}
      </h2>
      <img
        id="image"
        src={`http://openweathermap.org/img/wn/${oneweather.weather[0].icon}@2x.png`}
        alt={oneweather.weather[0].main}
      />
      <p>
        High: {oneweather.temp.max}
        {symbol} <br />
        Low: {oneweather.temp.min}
        {symbol} <br />
        Weather conditions: {oneweather.weather[0].main}
      </p>
    </div>
  );
}
Card.defaultProps = {
  oneweather: {},
  symbol: '',
};
Card.propTypes = {
  oneweather: Proptypes.instanceOf(Object),
  symbol: Proptypes.string,
};
export default Card;
