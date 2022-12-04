import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../Firebase/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { category }  = useParams();
  
  const q = category
  ? query(collection(db, 'products'), where('category', '==', category))
  : collection(db, 'products');
  
  
 
const productCollection = collection(db, "productos");

  useEffect(() => {
    
    getDocs(productCollection)
      .then((result) => {
        const listProducts = result.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });
        setProducts(listProducts);
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>

  )
}

export default ItemListContainer;