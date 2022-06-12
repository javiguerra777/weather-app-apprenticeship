import React from 'react';
import Proptypes from 'prop-types';

function Card({ oneweather }) {
  return (
    <div className="weather-card">
      <p>
        The Current Temperature for the day is: {oneweather.temp}, the
        Maximum Temperature for the day is: {oneweather.max_temp}, the
        Minimum Temperature for the day is: {oneweather.min_temp}, and
        the Current weather conditions for the day is:{' '}
        {oneweather.weather.description}
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
