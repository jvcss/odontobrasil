import { render, screen } from '@testing-library/react';
import App from './App';

test('loads and displays greeting', () => {
  render(<Main />);
  const linkElement = screen.getByText('Consultórios e Instalações');
  expect(linkElement).toBeInTheDocument();
});
