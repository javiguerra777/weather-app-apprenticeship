import React from 'react';
import Proptypes from 'prop-types';

function Form({
  newLocation,
  setNewLocation,
  handleLocationChange,
  displayLoc,
  testid,
}) {
  let disabled = false;
  if (!newLocation) {
    disabled = true;
  }
  return (
    <div className="header" data-testid={testid}>
      <div className="city-desc">
        <h4>
          Weather info for{' '}
          <span data-testid="location">{displayLoc}</span>
        </h4>
      </div>
      <div className="form">
        <form onSubmit={handleLocationChange}>
          <label htmlFor="search">
            <input
              id="search"
              name="search"
              placeholder="Disneyworld OR 95204 OR Stockton, CA"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
          </label>
          <button
            className="btn-main"
            type="submit"
            disabled={disabled}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

Form.defaultProps = {
  newLocation: '',
  setNewLocation: () => {},
  handleLocationChange: () => {},
  displayLoc: '',
  testid: '',
};
Form.propTypes = {
  newLocation: Proptypes.string,
  setNewLocation: Proptypes.func,
  handleLocationChange: Proptypes.func,
  displayLoc: Proptypes.string,
  testid: Proptypes.string,
};
export default Form;
