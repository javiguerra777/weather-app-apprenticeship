import { createContext } from 'react';

const ErrorContext = createContext({
  error: false,
});

export default ErrorContext;
