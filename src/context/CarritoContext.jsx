import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import helperPeticionesHttp from "../helpers/helper-Peticiones-http";


 const CarritoContext = createContext ()

 const CarritoProvider = ({children}) => {

  const urlCarrito = import.meta.env.VITE_BACKEND_CARRITOS

  const [agregarAlCarrito, eliminarDelCarrito, LimpiarElCarrito, carrito] = useLocalStorage ('carrito', [])

  function elProductoEstaEnElCarrito(producto) {
    const arrayProductoCarrito = carrito.filter(prod => prod.id ===producto.id)
    return  arrayProductoCarrito.length
  }

  function obtenerProductoDeCarrito (producto){
    return carrito.find (prod => prod.id === producto.id)

  }

  const agregarProductoAlCarritoContext = (producto) =>{

if(!elProductoEstaEnElCarrito(producto)) {
  producto.cantidad = 1
  agregarAlCarrito (producto)

} else {
  const productoDeCarrito = obtenerProductoDeCarrito(producto)
  productoDeCarrito.cantidad++
  window.localStorage.setItem('carrito', JSON.stringify(carrito))

}

    try {
      
    } catch (error) {
      console.log('[agregarProductoAlCarritoContext]', error)
      
    }

  }

  const eliminarProductoAlCarritoContext = (id) =>{
   eliminarDelCarrito(id)
  }
    const guardarCarritoContext = async (carrito) =>{
    console.log(carrito)
      try {
        const options = {
          method:'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(carrito)
        }
        
        const carritoGuardado = await helperPeticionesHttp(urlCarrito, options)
        console.log(carritoGuardado)
        
      } catch (error) {
        console.log('[guardarCarritoContext]', error)
      }

    
    }

    const limpiarCarritoContext =  () => {
      LimpiarElCarrito()

    }

  const data = {
    CarritoContext,
    carrito,
    agregarProductoAlCarritoContext,
    eliminarProductoAlCarritoContext,
    guardarCarritoContext,
    limpiarCarritoContext

  }

  return <CarritoContext.Provider value= {data }>{children}</CarritoContext.Provider>

}

export { CarritoProvider }
export default CarritoContext

