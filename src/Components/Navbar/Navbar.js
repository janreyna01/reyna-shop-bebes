import Carwidget from '../CarWidget/Carwidget';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="barra">
            <a href="www.google.com" className="div1">
            <h1 className="titulo">Bebe Shops</h1> 
            </a>
            <div className='lista'>
                <a className="about" href="www.google.com">Ropa</a>
                <a className="about" href="www.google.com">Juguetes</a>
                <a className="about" href="www.google.com">Accesorios</a>
            </div>
            <Carwidget/>
        </nav>
    )
  }

  export default Navbar;