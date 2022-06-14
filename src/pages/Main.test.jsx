import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

test('to check if proper message is displayed and card component is not displayed', async () => {
  render(<Main />);
  const container = screen.getByRole('main');
  const form = await screen.findByRole('form');
  const weather = screen.getByTestId('weather-component');
  const card = screen.getByTestId('card-component');
  const message = screen.getByTestId('day-message');

  expect(container).toBeInTheDocument();
  expect(form).toBeInTheDocument();
  expect(weather).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  expect(card).not.toBeInTheDocument();

});
