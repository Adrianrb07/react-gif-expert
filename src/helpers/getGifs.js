// Desc: Función para obtener los gifs de la API de Giphy
// Params: category
// Return: gifs
// Throws: No lanza excepciones

export const getGifs = async (category) => {

    const key = 'uW3TKRiJQeeQzU4MpxsSx28vvGf1hZqM';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=30`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
