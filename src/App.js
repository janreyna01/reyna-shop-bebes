import React from "react";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from './Components/Contex/CartContext';

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Las Mejores Ofertas"} />} />
            <Route path='/categoria/:id' element={<ItemListContainer greeting={"Las Mejores Ofertas"} />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter >
    </CustomProvider>
  );
}

export default App;
