import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Context} from '../Contex/CartContext';


const ItemDetail = (products) => {
    const { cart, addItem, IsInCart } = useContext(Context);


    let stock = 0;
    if(IsInCart(products.id)){
      const found = cart.find(item => item.id === products.id);
      stock = products.stock - found.cantidad;
    }else{
      stock = products.stock;
    }
  
    const onAdd = (count) => {
      addItem(products, count);
    };
  
    return (
        <>

        <h1>{products.products.title}</h1>
        <p>${products.products.price}</p>
        <img src={products.products.image} alt={products.products.title}/>
        <br/>
        <span>{products.products.description}</span><br/>
        <Link to="/categoria">
          <button>Seguir Comprando</button>
        </Link><br/>
         <ItemCount stock={stock} initial={1}/>
         <span>{stock === 0 ? 'Sin Stock' : <button onClick={()=>onAdd()}>Agregar al Carrito</button>}</span>
        </>
    )
}

export default ItemDetail;

/*<span>{stock === 0 ? 'Sin Stock' : <button onClick={}>Agregar al Carrito</button>}</span>*/