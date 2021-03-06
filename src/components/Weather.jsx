import React from 'react';
import Proptypes from 'prop-types';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { useSelector } from 'react-redux/es/exports';
import convertUnix from '../utils/functions';

const Weathercard = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 115px;
`;
function Weather({ weather, showInfo, symbol, activeDiv, testid }) {
  const error = useSelector((state) => state.error.value);
  return (
    <div data-testid={testid} id={error ? 'hidden' : ''}>
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
                data-testid={`weathercard${index}`}
              >
                <div
                  className={index === activeDiv ? 'active' : 'head'}
                >
                  <h4>{convertUnix(data.dt, true)}</h4>
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
  testid: '',
};
Weather.propTypes = {
  weather: Proptypes.instanceOf(Object),
  showInfo: Proptypes.func,
  symbol: Proptypes.string,
  activeDiv: Proptypes.number,
  testid: Proptypes.string,
};
export default Weather;
