import React, { createContext, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);
    
    const addItem = (item, cantidad) => {

    }
    
    const deleteItem = (id) => {

    }

    const clear = () => {
setCart([]);
setQty(0);
setTotal(0);
    }
    
    const isinCart = () => {

    }
    return (
        <Context.Provider >
      {children}
    </Context.Provider>
    )
}
