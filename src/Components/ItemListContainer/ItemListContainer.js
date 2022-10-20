import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer({ greeting }) {
const [products, setProducts] = useState([]);
const { id } = useParams();

const URL_BASE = 'https://fakestoreapi.com/products'
const URL_CAT = `${URL_BASE}/category/${id}`

useEffect(() => {
  fetch(id ? URL_CAT : URL_BASE)
    .then((res) => res.json())
    .then((json) => setProducts(json))
    .catch((error) => {
        console.log(error);
      })
      
  }, [id, URL_BASE, URL_CAT]);
    

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList products={products} />
        </>
        
    )
  }

  export default ItemListContainer;