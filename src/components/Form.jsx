import React from 'react';
import Proptypes from 'prop-types';

function Form({
  location,
  newLocation,
  setNewLocation,
  handleLocationChange,
}) {
  let disabled = false;
  if (!newLocation) {
    disabled = true;
  }
  return (
    <div>
      <header>
        <form onSubmit={handleLocationChange}>
          <h1>
            You can search for location based on City, State, or Zip
          </h1>
          <label htmlFor="search">
            Change Location:
            <input
              name="search"
              placeholder="City: Stockton, State: CA, Zip, 95204"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
          </label>
          <button type="submit" disabled={disabled}>
            Search
          </button>
        </form>
      </header>
      <h2>Weather for {location}</h2>
    </div>
  );
}

Form.defaultProps = {
  location: '',
  newLocation: '',
  setNewLocation: () => {},
  handleLocationChange: () => {},
};
Form.propTypes = {
  location: Proptypes.string,
  newLocation: Proptypes.string,
  setNewLocation: Proptypes.func,
  handleLocationChange: Proptypes.func,
};
export default Form;
