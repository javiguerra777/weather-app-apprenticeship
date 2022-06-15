import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

test('to see if proper information is showing on page', async () => {
  render(<Form />);
  const location = await screen.getByTestId('location');
  const button = await screen.getByRole('button', {
    text: /search/i,
  });
  const searchRef = await screen.getByRole('spinbutton');

  expect(location).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(searchRef).toBeInTheDocument();

  expect(location).toHaveTextContent(
    'Stockton, San Joaquin County, California, United States',
  );
  expect(button).toHaveAttribute('type', 'submit');
});

test('check if button is disabled before entering value', async () => {
  render(<Form />);
  const button = await screen.getByRole('button', {
    text: /search/i,
  });
  const searchRef = await screen.getByRole('spinbutton');

  expect(button).toBeDisabled();

  userEvent.type(searchRef, 'San Diego');
  expect(button).tobeEnabled();

  userEvent.clear(searchRef);
  expect(button).toBeDisabled();
});
