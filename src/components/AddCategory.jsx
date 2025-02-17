import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onImputChange = ({ target }) => {
        setinputValue(target.value);
        // console.log(target.value);
        // console.log('onImputChange')
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onImputChange }
            />
        </form>
    )
}
