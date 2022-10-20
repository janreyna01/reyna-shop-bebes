import CardShopping from 'react-card-shopping';
import 'react-card-shopping/src/card.css';


const ItemDetail = (products) => {
    return (
        <>
<CardShopping
    alert
    title={products.title}
    price={products.price}
    source={products.image}
    discount={9}
    avalible={150}
    addToCart={() => console.log('agregado al carrito')}
  />
        </>
    )
}

export default ItemDetail;