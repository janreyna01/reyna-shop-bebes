import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .catch((error) => {
                console.log(error);
            })
        //.finally(setLoading(false));
    }, [id]);


    return (
        <>
            <ItemDetail products={products} />
        </>

    )
}

export default ItemDetailContainer;
