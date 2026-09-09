import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título do gerador de frases', () => {
  render(<App />);

  const title = screen.getByText(/gerador de frases/i);

  expect(title).toBeInTheDocument();
});

test('renderiza o botão de nova frase', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /nova frase/i
  });

  expect(button).toBeInTheDocument();
});