import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  return (
    <>
      <h1 className='title'>Gif Expert App</h1>
      <h5 className='subTitle'>Todos los gifs que quieras!!!</h5>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onRemoveCategory={onRemoveCategory}
        />
      ))}
    </>
  );
};
