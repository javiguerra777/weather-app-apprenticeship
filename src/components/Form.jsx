import React from 'react';
import Proptypes from 'prop-types';

function Form({
  newLocation,
  setNewLocation,
  handleLocationChange,
  displayLoc,
}) {
  let disabled = false;
  if (!newLocation) {
    disabled = true;
  }
  return (
    <div className="header">
      <div>
        <h4>Weather info for {displayLoc}</h4>
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
};
Form.propTypes = {
  newLocation: Proptypes.string,
  setNewLocation: Proptypes.func,
  handleLocationChange: Proptypes.func,
  displayLoc: Proptypes.string,
};
export default Form;
