import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory', () => {

  test('debe cambiar el valor del la caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });

    expect(input.value).toBe('Saitama');

  });

  test('debe llamar onNewCategory si el input tiene un valor', () => {


    const inputValue = 'Saitama';
    const mockOnNewCategory = jest.fn();

    render(<AddCategory onNewCategory={mockOnNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(mockOnNewCategory).toHaveBeenCalled();
    expect(mockOnNewCategory).toHaveBeenCalledTimes(1);
    expect(mockOnNewCategory).toHaveBeenCalledWith(inputValue);

  });

  test('no debe llamar onNewCategory si el input está vacío', () => {

    const mockOnNewCategory = jest.fn();
    render(<AddCategory onNewCategory={mockOnNewCategory} />); // sujeto de prueba

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockOnNewCategory).toHaveBeenCalledTimes(0);
    expect(mockOnNewCategory).not.toHaveBeenCalled();

  });
});

