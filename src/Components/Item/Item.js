import './Item.css';

function Item({product}) {
    return(
        <div className="card">
                <div className="card-logo">
                    <img src={product.image} width='100' alt={product.title} />
                </div>
                <div className="card-content">
                  <h1>{product.title}</h1>  
                  <p>${product.price}</p>
                  <button>Ver Detalle</button>
                </div>
            </div>
    )
}

export default Item;