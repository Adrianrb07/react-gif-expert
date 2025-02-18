import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, onRemoveCategory }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="category-container">
      <div className="category-header">
        <h3 className="category">{category}</h3>
        <div className="tooltip-container">
          <button className="delete-button" onClick={() => onRemoveCategory(category)}>
            <i className="fas fa-trash-alt"></i>
            <span className="tooltip-text">Eliminar categoría</span>
          </button>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
