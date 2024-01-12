import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextBox2 from './TextBox2';

describe('TextBox2', () => {
  it('should render the Box and Button elements', () => {
    const { getByRole, getByText } = render(<TextBox2 />);
    const boxElement = getByRole('caja');
    const buttonElement = getByText('Pulsa para modificar el color del texto');

    expect(boxElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should initially have pink text color', () => {
    const { getByRole } = render(<TextBox2 />);
    const boxElement = getByRole('caja');

    expect(boxElement).toHaveStyle('color: pink');
  });

  it('should change text color to black on button click', () => {
    const { getByRole, getByText } = render(<TextBox2 />);
    const boxElement = getByRole('caja');
    const buttonElement = getByText('Pulsa para modificar el color del texto');

    fireEvent.click(buttonElement);

    expect(boxElement).toHaveStyle('color: black');
  });

  it('should change text color back to pink on second button click', () => {
    const { getByRole, getByText } = render(<TextBox2 />);
    const boxElement = getByRole('caja');
    const buttonElement = getByText('Pulsa para modificar el color del texto');

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(boxElement).toHaveStyle('color: pink');
  });
});
