import React from 'react';
import Proptypes from 'prop-types';

function Form({
  newLocation,
  setNewLocation,
  handleLocationChange,
  displayLoc,
  testid,
}) {
  return (
    <div className="header" data-testid={testid}>
      <div className="city-desc">
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
              onChange={(e) => setNewLocation(e.target.value)}
              data-testid="input"
            />
          </label>
          <button
            className="btn-main"
            type="submit"
            disabled={newLocation === ''}
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
