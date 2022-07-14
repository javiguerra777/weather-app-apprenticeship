import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLocation,
  changeNewLocation,
} from '../store/locationSlice';

function Form({ handleLocationChange, displayLoc, testid }) {
  const dispatch = useDispatch();
  const newLocation = useSelector((state) => state.location.newValue);
  const error = useSelector((state) => state.error.value);
  return (
    <div className="header" data-testid={testid}>
      <div className="city-desc" id={error ? 'hidden' : ''}>
        <h4 data-testid="location">Weather info for {displayLoc}</h4>
      </div>
      <div className="form">
        <form onSubmit={handleLocationChange}>
          <label htmlFor="search">
            <input
              id="search"
              name="search"
              placeholder="Disneyworld OR 95204 OR Stockton, CA"
              value={newLocation}
              onChange={(e) =>
                dispatch(changeNewLocation(e.target.value))
              }
              data-testid="input"
            />
          </label>
          <button
            className="btn-main"
            type="submit"
            disabled={newLocation === ''}
            onClick={() => dispatch(changeLocation(newLocation))}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

Form.defaultProps = {
  handleLocationChange: () => {},
  displayLoc: '',
  testid: '',
};
Form.propTypes = {
  handleLocationChange: Proptypes.func,
  displayLoc: Proptypes.string,
  testid: Proptypes.string,
};
export default Form;
