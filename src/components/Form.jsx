import React from 'react';
import Proptypes from 'prop-types';

function Form({
  location,
  newLocation,
  setNewLocation,
  handleLocationChange,
}) {
  return (
    <div>
      <header>
        <form onSubmit={handleLocationChange}>
          <label htmlFor="search">
            Change City:
            <input
              name="search"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
            />
          </label>
        </form>
      </header>
      <h1>Weather for {location}</h1>
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
