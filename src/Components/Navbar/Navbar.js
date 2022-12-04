import Carwidget from '../CarWidget/Carwidget';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const categorias = [
        { nombre: "Juguetes", id: 0, ruta: "/categoria/juguetes" },
        { nombre: "Ropa", id: 1, ruta: "/categoria/ropa" },
        { nombre: "Accesorios", id: 2, ruta: "/categoria/accesorios" },
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
            <Link to='/cart'>
                <Carwidget />
            </Link>

        </nav>
    )
}

export default Navbar;