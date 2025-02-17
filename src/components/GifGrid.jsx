import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// category
// 1. Llamado al helper getGifs
// 2. Cargar los gifs en el estado
// 3. Mostrar los gifs en el componente
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log(isLoading)

    return (
        <>
            <h3>{category}</h3>

            { 
                isLoading && <p>Cargando...</p> 
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
