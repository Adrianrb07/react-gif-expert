import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    
    test('debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category }/>); 

        expect( screen.getByText( 'Cargando...') );
        expect( screen.getByText( category ) );
        expect( screen.getByText( 'Eliminar categoría' ) );        
    });

    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/cualquier.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/cualquier.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render(<GifGrid category={ category }/>); 

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );


     });

 });