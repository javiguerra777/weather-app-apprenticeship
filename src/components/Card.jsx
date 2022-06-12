import React from 'react';
import Proptypes from 'prop-types';

function Card({ oneweather }) {
  return (
    <div className="weather-card">
      <p>
        The Current Temperature for the day is: {oneweather.temp.day}{' '}
        celsius, the Maximum Temperature for the day is:{' '}
        {oneweather.temp.max} celsius, the Minimum Temperature for the
        day is: {oneweather.temp.min} celsius, and the Current weather
        conditions for the day is: {oneweather.weather[0].main}
      </p>
    </div>
  );
}
Card.defaultProps = {
  oneweather: {},
};
Card.propTypes = {
  oneweather: Proptypes.instanceOf(Object),
};
export default Card;
