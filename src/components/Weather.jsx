import React from 'react';
import Proptypes from 'prop-types';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { convertUnix } from '../utils/functions';

const Weathercard = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 115px;
`;
function Weather({ weather, showInfo, symbol, activeDiv }) {
  return (
    <div>
      <div className="d-flex">
        {Object.keys(weather).length !== 0 &&
          weather.daily.map((data, index) => {
            return (
              <Weathercard
                className={
                  index === activeDiv ? 'active-card' : 'card'
                }
                onClick={() => showInfo(index)}
                role="button"
                tabIndex={0}
                key={Math.floor(Math.random() * 100000000)}
              >
                <div
                  className={index === activeDiv ? 'active' : 'head'}
                >
                  <h4>{convertUnix(data.dt)}</h4>
                </div>
                <h3>
                  {data.temp.day}
                  {symbol}
                </h3>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].main}
                />
                <p>
                  High: {data.temp.max}
                  {symbol} <br />
                  Low: {data.temp.min}
                  {symbol}
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
  symbol: '',
  activeDiv: -1,
};
Weather.propTypes = {
  weather: Proptypes.instanceOf(Object),
  showInfo: Proptypes.func,
  symbol: Proptypes.string,
  activeDiv: Proptypes.number,
};
export default Weather;
