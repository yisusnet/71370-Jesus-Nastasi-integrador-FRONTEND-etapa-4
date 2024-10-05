import { useContext, useMemo } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";
import './ListadoCarrito.scss';
import notificaSweet2 from "./service/ListadoCarrito.service";

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext);

  const totalCarrito = useMemo(() => {
    return carrito.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
  }, [carrito]);

  const handleComprar = () => {
    console.log('comprando')

    guardarCarritoContext(carrito);
  };

  const handleLimpiarCarrito = () => {
    notificaSweet2( () => 
      limpiarCarritoContext()
    )
    
  };

  return (
    <>
      <div className="contenedor-tabla">
        <div className="contenedor-tabla__carrito">
          <table className="tabla-carrito">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.length <= 0 ? (
                <tr>
                  <td colSpan={5}>No hay productos</td>
                </tr>
              ) : (
                carrito.map((producto, idx) => (
                  <ItemCarrito key={idx} producto={producto} />
                ))
              )}
            </tbody>
          </table>

          <div className="contenedor-botones">
            <hr />
            {carrito.length > 0 && (
              <>
                <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button onClick={handleComprar}>Comprar</button>
              </>
            )}
          </div>

          
          <div className="total-carrito">
            <p>Total: ${totalCarrito.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListadoCarrito;
