import { useContext } from "react"
import CarritoContext from "../context/CarritoContext"
import './ItemCarrito.scss'
import notificaSweet from "./service/TablaFilaUsuarios.service"


const ItemCarrito = ({producto}) => {

const {eliminarProductoAlCarritoContext} = useContext(CarritoContext)

const handleEliminar = (id) => {
  notificaSweet(producto.nombre, () => {

    eliminarProductoAlCarritoContext(id)
  })
}

  return (
    <tr>
      <td>
        <img className='fotoItemCarrito' src={producto.foto } alt={producto.nombre}/>
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td> 
        <button className="booton-eliminar" onClick={() => handleEliminar(producto.id)}>eliminar</button>
        </td>

    </tr>
  )
}

export default ItemCarrito
