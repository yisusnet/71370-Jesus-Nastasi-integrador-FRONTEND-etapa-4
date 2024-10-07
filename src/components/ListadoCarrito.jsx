import { useContext, useMemo } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";
import './ListadoCarrito.scss';
import notificaSweet2 from "./service/ListadoCarrito.service";
import { NavLink } from "react-router-dom";

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext} = useContext(CarritoContext);

  const totalCarrito = useMemo(() => {
    return carrito.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
  }, [carrito]);

  const handleComprar = () => {
    console.log('comprando')

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
          
            {carrito.length > 0 && (
              <>
                <button className="contenedor-botones__vaciar-carrito" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
               <NavLink to='/realizando-pago'><button className="contenedor-botones__comprar" onClick={handleComprar}>Comprar</button></NavLink>
              </>
            )}
                      <div className="contenedor-botones__total-carrito">
            <p>Total: ${totalCarrito}</p>
          </div>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default ListadoCarrito;
