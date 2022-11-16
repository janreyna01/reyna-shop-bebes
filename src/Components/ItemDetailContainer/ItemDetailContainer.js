import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../../Firebase/Firebase';
import { getDoc, collection, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();
console.log(id);
    useEffect(() => {
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, id);

        getDoc(refDoc)
            .then((result) => {
                setProducts({
                    id: result.id,
                    ...result.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);
    

    return (
        <>
            <ItemDetail products={products} />
        </>

    )
}

export default ItemDetailContainer;
