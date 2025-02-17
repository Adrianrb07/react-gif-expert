import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


// Componente principal
// 1. Listado de categorías
// 2. Agregar categorías
// 3. Mostrar los GifGrid
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    // console.log(categories)

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // console.log(newCategory)
    }


    return (
        <>

            <h1 className="title">GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category} />
                ))
            }



        </>
    )
}
