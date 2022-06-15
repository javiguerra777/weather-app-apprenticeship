import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

test('to check if proper message is displayed and card component is not displayed', async () => {
  render(<Main />);
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

test('check if card is displayed after user event', async () => {
  render(<Main />);
  const card = await screen.queryByTestId('card-component');
  const message = await screen.getByTestId('day-message');
  const weatherCard = await screen.queryByTestId('weathercard-div');

  expect(weatherCard).toBeInTheDocument();
  userEvent.click(weatherCard);
  expect(card).toBeInTheDocument();
  expect(message).not.toBeInTheDocument();
});
