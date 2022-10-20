import Carwidget from '../CarWidget/Carwidget';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const categorias = [
        { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
        { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
        { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
        { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
    ];

    return (
        <nav className="barra">
            <Link to='/' className="div1">
                <h1 className="titulo">Bebe Shops</h1>
            </Link>
            <div className='lista'>
                {categorias.map((categoria) => {
                    return (
                        <Link
                            key={categoria.id}
                            to={categoria.ruta}                        >
                            {categoria.nombre}
                        </Link>
                    );
                })}
            </div>
            <Carwidget />
        </nav>
    )
}

export default Navbar;