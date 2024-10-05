import { createContext, useEffect, useState } from "react";
import helperPeticionesHttp from "../helpers/helper-Peticiones-http";



const  ProductosContext = createContext()

const ProductosProvider = ( {children} ) => {

const url = import.meta.env.VITE_BACKEND_PRODUCTOS

const [productos, setProductos] = useState([])
const [productosEditado, setProductosEditado ] = useState(null)

useEffect(() => {
  getAllProductos()
}, [])

const getAllProductos = async () => {

  try { 
      const productosData = await  helperPeticionesHttp(url)

      setProductos(productosData)
    
  } catch (error) {
    console.error('[getAllProductos]', error)
    
  }
}

const creandoProductoContext = async (nuevoProducto) => {
  try {
    const options = {
      method:'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(nuevoProducto)
    }
   const dataProductoNuevo = await helperPeticionesHttp(url, options)

    setProductos([...productos, dataProductoNuevo])
    
  } catch (error) {
    console.error('[agregarProductos]', error)
    
  }
}


const ActualizarProductoContext = async (productoAEditar) =>{

  try {

    const options = {
      method:'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(productoAEditar)
  }
    
  const urlEditar = url + productoAEditar.id;



  const dataProductosAEditar = await helperPeticionesHttp(urlEditar, options)

  const nuevoEstadoProducto = productos.map(
    prod => prod.id === dataProductosAEditar.id 
    ?
    dataProductosAEditar
    :
    prod
  )
  
  setProductos(nuevoEstadoProducto)

  } catch (error) {
    console.error('[ActualizarProductoContext]', error)
    
  }

} 

const EliminarProductoContext = async (productoId) => {
  try {
    const urlEliminar = `${url}/${productoId}`; 

    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };

 
    await helperPeticionesHttp(urlEliminar, options);

  
    const nuevoEstadoProductos = productos.filter(prod => prod.id !== productoId);


    setProductos(nuevoEstadoProductos);

  } catch (error) {
    console.error('[EliminarProductoContext]', error);
  }
};



const data = { 
  productos,
  creandoProductoContext,
  ActualizarProductoContext,
  setProductosEditado,
  productosEditado,
  EliminarProductoContext


  


}

return  <ProductosContext.Provider value= {data}>{children}</ProductosContext.Provider>

}

export {ProductosProvider};
export default ProductosContext
