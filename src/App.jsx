import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import ErrorContext from './utils/context';

function App() {
  const [error, setError] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ErrorContext.Provider value={{ error, setError }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorContext.Provider>
  );
}

export default App;
