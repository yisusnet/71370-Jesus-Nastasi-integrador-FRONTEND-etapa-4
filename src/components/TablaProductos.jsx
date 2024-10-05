import { useContext } from "react"
import TablaFilaProductos from "./TablaFilaProductos"
import ProductosContext from "../context/ProductosContext"
import './TablaProductos.scss'


const TablaProductos = () => {
  
  const {productos} = useContext(ProductosContext)

  return (
    <table className="tabla__alta-productos">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Foto</th>
        <th>Categoria</th>
        <th>Envio</th>
        <th>descripcion</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>

    {
          productos && productos.map((producto) => (
            <TablaFilaProductos key={producto.id} producto={producto} />
            
          ))
        }


       
      </tbody>
    </table>
  )
}

export default TablaProductos
