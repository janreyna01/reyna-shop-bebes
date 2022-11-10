import './Item.css';
import {Link} from 'react-router-dom';

function Item({ product }) {
    return (
        <div className="card">
            <div className="card-logo">
                <img src={product.image} width='100' alt={product.title} />
            </div>
            <div className="card-content">
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <Link to={"/producto/" + product.id}>
                    <button>Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;