import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

function Header() {
  const error = useSelector((state) => state.error.value);
  const fixError = () => {
    return true;
  };
  return (
    <div>
      {error ? (
        <form onSubmit={fixError}>
          <button type="submit">Fix Errors</button>
        </form>
      ) : (
        <Link to="/">Go home</Link>
      )}
    </div>
  );
}

export default Header;
