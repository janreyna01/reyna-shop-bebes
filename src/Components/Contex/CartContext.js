import React, { createContext, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

 


  const addItem = (item, cantidad) => {
    if (IsInCart(item.products.id) === true) {
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
    setTotal(total + (item.products.price * cantidad));
  };

  const deleteItem = (id) => {
    const found = cart.find(element => element.products.id === id);
    setCart(cart.filter((item) => item.products.id !== id));
    setQty(qty - found.cantidad)
    setTotal(total - (found.products.price * found.cantidad))
  };

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  }

  const IsInCart = (id) => {
    const find = cart.find(item => item.products.id === id)
    if (find) {
      return true
    }
    return false
  };


  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear, IsInCart }} >
      {children}
    </Context.Provider>
  )
};
