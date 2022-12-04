import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Context } from '../Contex/CartContext';


const ItemDetail = (products) => {
  const { cart, addItem, IsInCart } = useContext(Context);


  let stock = 0;
  if (IsInCart(products.id)) {
    const found = cart.find(item => item.id === products.id);
    stock = products.products.stock - found.cantidad;
  } else {
    stock = products.products.stock;
  }

  const onAdd = (contador) => {
    addItem(products, contador);
  };

  return (
    <>
      <h1>{products.products.title}</h1>
      <p>${products.products.price}</p>
      <img src={products.products.image} alt={products.products.title} />
      <br />
      <span>{products.products.description}</span><br />
      <Link to="/categoria">
        <button>Seguir Comprando</button>
      </Link><br />
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      <Link to="/cart">
        <button>Finalizar Compra</button>
      </Link>

    </>
  )
}

export default ItemDetail;

