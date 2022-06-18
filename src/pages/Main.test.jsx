import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('to check if proper message is displayed and card component is not displayed', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const container = screen.getByRole('main');
  const form = await screen.getByTestId('form-component');
  const weather = await screen.getByTestId('weather-component');
  const card = await screen.queryByTestId('card-component');
  const message = await screen.getByTestId('day-message');

  expect(container).toBeInTheDocument();
  expect(form).toBeInTheDocument();
  expect(weather).toBeInTheDocument();
  expect(card).not.toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
