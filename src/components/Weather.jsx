import React from 'react';
import Proptypes from 'prop-types';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Weathercard = styled.div`
  background-color: gray;
  cursor: pointer;
`;
function Weather({ weather, showInfo }) {
  return (
    <div>
      <h1>Weather data for this week:</h1>
      <div className="d-flex">
        {weather.map((data, index) => {
          return (
            <Weathercard
              className="card"
              onClick={() => showInfo(index)}
              role="button"
              tabIndex={0}
              key={nanoid()}
            >
              <p>
                Actual Temp: {data.temp} <br />
                Max temp: {data.max_temp} <br />
                Min temp: {data.min_temp}
              </p>
            </Weathercard>
          );
        })}
      </div>
    </div>
  );
}
Weather.defaultProps = {
  weather: {},
  showInfo: () => {},
};
Weather.propTypes = {
  weather: Proptypes.instanceOf(Object),
  showInfo: Proptypes.func,
};
export default Weather;
