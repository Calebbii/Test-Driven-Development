import { render, screen } from '@testing-library/react';
import App from './App';

test('Ensure the title Test Driven Development is rendered', () => {
  render(<App />);
  const text = screen.getByText('Test Driven Development');
  expect(text).toBeInTheDocument();
});
