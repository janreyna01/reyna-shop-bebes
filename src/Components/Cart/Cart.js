import React, { useContext } from "react";
import { Context } from '../Contex/CartContext';
import { Link } from "react-router-dom";


export const Cart = () => {
    const { cart, deleteItem, total, clear } = useContext(Context);



   
    
    return (
        <>

            {cart.length === 0 ? (
                <>
                    <h1 >
                        No agregaste productos aun, puedes ir <Link to="/">Aquí </Link> Para Empezar a Comprar
                    </h1>
                    <h2 >Gracias por tu visita</h2>
                </>
            ) : (
                <>
                    {cart.map((producto) => (
                        <>
                            <div>
                                <h1 key={producto.products.id}>{producto.products.title}</h1>
                                <h1>Cantidad: {producto.cantidad}</h1>
                                <h2>${producto.products.price}</h2>
                                <h3>Total: ${producto.cantidad * producto.products.price}</h3>
                                <button onClick={() => deleteItem(producto.products.id)}>Eliminar</button>
                            </div>
                            
                        </>
                    ))}
                    <h1>Total a Pagar:${total}</h1>
                    <Link to='/pago'>
                    <button >finalizar compra</button>
                    </Link>
                    <button onClick={() => clear()}>Limpiar Carrito</button>
                </>
            )}
            
        </>
    );
};
