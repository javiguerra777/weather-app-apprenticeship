import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('to see if proper information is showing on page', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const location = await screen.getByTestId('location');
  const button = await screen.getByRole('button', {
    text: /search/i,
  });
  const searchRef = await screen.getByTestId('input');

  expect(location).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(searchRef).toBeInTheDocument();

  expect(button).toHaveAttribute('type', 'submit');
});

test('check if button is disabled before entering value', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const button = await screen.getByRole('button', {
    text: /search/i,
  });
  const searchRef = await screen.getByTestId('input');
  expect(button).toBeDisabled();

  await userEvent.type(searchRef, 'San Diego');
  expect(button).not.toBeDisabled();

  userEvent.clear(searchRef);
  expect(button).toBeDisabled();
});
