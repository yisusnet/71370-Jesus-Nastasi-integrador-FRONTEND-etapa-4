import { useContext, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import ProductosContext from "../context/ProductosContext";
import useTitulo from "../hooks/useTitulo";
import './Inicio.scss';

const Inicio = () => {
  const { productos } = useContext(ProductosContext);
  const [busquedaTermino, setBusquedaTermino] = useState('');

  const handleSearch = (term) => {
    setBusquedaTermino(term);
  };

  useTitulo('Inicio');

  const filtrarProducto = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busquedaTermino.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(busquedaTermino.toLowerCase())
  );

  return (
    <div className="contenedor-main">
      <Header onSearch={handleSearch} showSearchInputs={true} /> 
      <main className="main-contenido">
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Nuestro MENU</h1>
            <p>Se encontraron las siguientes pizzas</p>
          </header>

          <div className="cards-container" id="contenedor-cards">
            {filtrarProducto.length > 0 ? ( 
              filtrarProducto.map((producto) => (
                <Card key={producto.id} producto={producto} />
              ))
            ) : (
              <p>No se encontraron productos.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Inicio;
