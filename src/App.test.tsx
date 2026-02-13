import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the start button', () => {
  render(<App />);
  const startButton = screen.getByRole('link', { name: /시작하기/i });
  expect(startButton).toBeInTheDocument();
});
