import React, { createContext, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };

  const deleteItem = (id) => {

  }

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  }

  const IsInCart = (id) => { cart.some((item) => item.id === id) };


  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear, IsInCart }} >
      {children}
    </Context.Provider>
  )
};
