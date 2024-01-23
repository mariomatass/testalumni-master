import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormUsuario from '../components/FormUsuario';

describe('FormUsuario', () => {
  it('renders the button', () => {
    render(<FormUsuario />);
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the TextField', () => {
    render(<FormUsuario />);
    const textFieldElement = screen.getByLabelText('Nombre');
    expect(textFieldElement).toBeInTheDocument();
  });

  it('renders an h2 element', () => {
    render(<FormUsuario />);
    const headingElement = screen.getByRole('heading', { level: 2, name: /rellena el formulario/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('clears the TextField when the button is clicked', () => {
    render(<FormUsuario />);
    const textFieldElement = screen.getByLabelText('Nombre');
    const buttonElement = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(textFieldElement, { target: { value: 'John' } });
    expect(textFieldElement.value).toBe('John');

    fireEvent.click(buttonElement);
    expect(textFieldElement.value).toBe('');
  });
});
