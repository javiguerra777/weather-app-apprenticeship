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
        {weather.daily?.map((data, index) => {
          return (
            <Weathercard
              className="card"
              onClick={() => showInfo(index)}
              role="button"
              tabIndex={0}
              key={nanoid()}
            >
              <p>
                Day Temp: {data.temp.day} celsius <br />
                Max temp: {data.temp.max} celsius <br />
                Min temp: {data.temp.min} celsius
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
