import React, { useState } from 'react';


function ItemCount({ stock, initial }) {
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

        </>
    )

}

export default ItemCount;