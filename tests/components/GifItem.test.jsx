import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem />', () => { 

    test('debe hacer match con el snapshot', () => {

        const title = 'Goku';
        const url = 'https://localhost/algo.jpg';

        const { container } = render(<GifItem title={title} url={url} />);
        
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con la URL y el Alt indicado', () => {

        const title = 'Goku';
        const url = 'https://localhost/algo.jpg';

        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        // Otra forma de hacerlo es con desestructuración
        const { src , alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );        
    });
    
    test('debe mostrar el título del componente', () => {

        const title = 'Goku';
        const url = 'https://localhost/algo.jpg';

        render(<GifItem title={title} url={url} />);
        expect( screen.getByText(title) ).toBeTruthy();     
    });

 });