import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css'

function App() {
  return (
    <div className='App'>
    <Navbar />
    <ItemListContainer greeting={"Las Mejores Ofertas"} />
    </div>
    
  );
}

export default App;
