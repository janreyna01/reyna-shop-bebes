import CardShopping from 'react-card-shopping';
import 'react-card-shopping/src/card.css';


const ItemDetail = (products) => {
    console.log(products);
    console.log(products.products.title);
    return (
        <>
            <CardShopping
                alert
                title={products.products.title}
                price={products.products.price}
                source={products.products.image}
                discount={9}
                avalible={150}
                addToCart={() => console.log('agregado al carrito')}
            />
        </>
    )
}

export default ItemDetail;