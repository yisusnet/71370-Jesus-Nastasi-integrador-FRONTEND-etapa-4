import React, { useContext, useMemo } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import CarritoContext from "../context/CarritoContext";
import "./Comprando.scss";
import notificaSweet3 from "./service/Comprando.service";


const Comprando = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext);
  
  const irAInicio = useNavigate();

  
  const totalCarrito = useMemo(() => {
    return carrito.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
  }, [carrito]);

  const handlePagar = () => {
    guardarCarritoContext(carrito);
    console.log("Realizando pago...")
    console.log("carrito guardado en backend", carrito)
    notificaSweet3();
    limpiarCarritoContext()
    irAInicio('/')
    
    
  };

  return (
    <div className="comprando-container">
    <div className="comprando-container2">
      <h1>Resumen de la Compra</h1>
      <table className="tabla-compra">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto, idx) => (
            <tr key={idx}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>${(producto.precio * producto.cantidad)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-compra">
        <h3>Total: ${totalCarrito}</h3>
      </div>

      <div className="botones-compra">
       <NavLink to="/carrito"> <button className="botones-compra__retroceder" >
          Volver al Carrito
        </button></NavLink>
        <button className="botones-compra__pago" onClick={handlePagar}>
          Realizar Pago
        </button>
      </div>
      </div>
    </div>
  );
};

export default Comprando;
