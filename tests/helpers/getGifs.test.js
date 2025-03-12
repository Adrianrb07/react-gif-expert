import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => { 

    test('debe de retornar un array con elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        // Otra forma de hacerlo sería con toHaveProperty
        // expect( gifs[0] ).toHaveProperty('id', 'title', 'url');
    })


 })