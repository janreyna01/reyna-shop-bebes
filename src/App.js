import React from "react";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from './Components/Contex/CartContext';
//import { Cart } from "./Components/Cart/Cart"; <Route path='/producto/:id' element={<ItemDetailContainer />} />

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Las Mejores Ofertas"} />} />
            <Route path='/categoria/:category' element={<ItemListContainer greeting={"Las Mejores Ofertas"} />} />
            
            
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter >
    </CustomProvider>
  );
}

export default App;

//<Route path="/cart" element={<Cart/>} />