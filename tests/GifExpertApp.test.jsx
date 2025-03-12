import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

  test('debe de mostrarse correctamente', () => {

    render(<GifExpertApp />);

    expect(screen.getByText('Gif Expert App'));
    expect(screen.getByText('Todos los gifs que quieras!!!'));

  });

  test('debe de agregar una nueva categoría al enviar el formulario', () => {

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Simular la entrada de texto y el envío del formulario
    fireEvent.input(input, { target: { value: 'Nueva categoría' } });
    fireEvent.submit(form);

    // Verificar que la nueva categoría se ha agregado
    expect(screen.getByText('Nueva categoría'));
    
  });

});