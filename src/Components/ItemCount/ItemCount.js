import React, { useState } from 'react';


function ItemCount({ stock, initial, onAdd }) {
    const [contador, setContador] = useState(initial)


    const increment = () => {
        if (stock > contador) {
            setContador(contador + 1);
        }
    };

    const decrement = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }

    };

    return (
        <>
            <button onClick={decrement}>-</button>
            <h2>{contador}</h2>
            <button onClick={increment}>+</button>
            <span>
                {stock === 0 ? 'Sin Stock': <button onClick={()=>onAdd(contador)}>Agregar al Carrito</button>}
            </span>
        </>
    )

}

export default ItemCount;