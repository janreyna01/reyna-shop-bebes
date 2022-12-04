import React from "react";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from './Components/Contex/CartContext';
import { Cart } from "./Components/Cart/Cart"; 
import PagePagos from "./Components/PagePago/PagePago";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a la Mejor Tiena Para Bebés"} />} />
            <Route path='/categoria/:category' element={<ItemListContainer greeting={"Bienvenidos a la Mejor Tiena Para Bebés"} />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/pago" element={<PagePagos/>} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter >
    </CustomProvider>
  );
}

export default App;

