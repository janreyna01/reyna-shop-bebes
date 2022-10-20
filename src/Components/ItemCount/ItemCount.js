import { useState } from 'react';

function ItemCount() {
const [contador, setContador] = useState(1)

const increment = () => {
    setContador(contador + 1);
};

const decrement = () => {
    setContador(contador - 1);
};

    return(
        <>
        <button onClick={decrement}>-</button>
        <h2>{contador}</h2>
        <button onClick={increment}>+</button>
        <button >Agregar al Carrito</button>
    </> 
    )
    
}

export default ItemCount;