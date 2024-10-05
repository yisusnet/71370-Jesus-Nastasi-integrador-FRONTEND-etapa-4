import { useContext } from 'react'
import './TablaFilaProductos.scss'
import ProductosContext from '../context/ProductosContext'
import notificaSweet from './service/TablaFilaUsuarios.service'
import { NavLink } from 'react-router-dom'

const TablaFilaProductos = ( {producto} ) => {

      const {setProductosEditado, EliminarProductoContext} = useContext(ProductosContext)

  const handleEditar = (producto) => {
    setProductosEditado(producto)
  }
  const handleEliminar = () => {
    notificaSweet(producto.nombre, () => {
      EliminarProductoContext(producto.id); 
    });
  };


  return (
                  
            <tr>
              <td>{producto.nombre}</td>
              <td>{`${producto.precio}$`}</td>
              <td>{producto.stock}</td> 
              <td>
                <img className="imgFoto "
                src={producto.foto} alt={producto.nombre}/>
                </td>
                <td>{producto.categoria}</td> 
                <td>{producto.envio  ? 'SI' : 'NO'}</td> 
                <td>{producto.descripcion}</td>

              <td><NavLink to={`/detalleProducto/${producto.id}`}><button>Ver Producto</button></NavLink>
              <button  onClick={handleEliminar}  >Eliminar</button>
             <button onClick={() => handleEditar(producto)}>Editar</button>
              </td>

            </tr>
              
  )
}

export default TablaFilaProductos
