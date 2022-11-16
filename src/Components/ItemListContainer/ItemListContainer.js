import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../Firebase/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { category } = useParams();
  //console.log(category);


  const productCollection = collection(db, "productos");
  // const q = query(productCollection, where('category', '==', 'accesorios'))
  let q
  if (category === 'accesorios') {
    q = query(productCollection, where('category', '==', 'ropa'));
    
  } if (category === 'ropa') {
    q = query(productCollection, where('category', '==', 'ropa'));
    console.log(category);
  } if (category === 'juguetes') {
    q = query(productCollection, where('category', '==', 'juguetes'));
  } else{
    q = collection(db, "productos");
  }



  useEffect(() => {


    getDocs(q)
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

  }, [q]);

  return (
    <>
      <h1>{category}</h1>
      <ItemList products={products} />
    </>

  )
}

export default ItemListContainer;