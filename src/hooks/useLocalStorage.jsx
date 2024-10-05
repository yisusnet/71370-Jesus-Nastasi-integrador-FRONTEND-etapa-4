import { useState } from "react"



export const useLocalStorage = (clave, valorInicial = []) =>{

  const getValorAlmacenado = () => {

    try {

      const valorAlmacenado = window.localStorage.getItem (clave)
      return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
      
    } catch (error) {
      console.error(`error al obtener ${clave} del local storage ${error}`)
      return valorInicial
      
    }
  }

  const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

  const guardarValor = (valorNuevo) =>{


    try {
      const nuevoValorAlmacenado = [...valorAlmacenado , valorNuevo]
      setValorAlmacenado(nuevoValorAlmacenado)
      window.localStorage.setItem (clave, JSON.stringify(nuevoValorAlmacenado))
    } catch (error) {
      console.log(`error al guardar ${clave} del local storage ${error}`);
      
      
    }
  }

  const eliminarValor = (id) =>{
    try {

      const nuevoValorAlmacenado = [...valorAlmacenado]
      const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
      nuevoValorAlmacenado.splice(indice, 1)
      console.log(nuevoValorAlmacenado)
      setValorAlmacenado(nuevoValorAlmacenado)
      window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
      
    } catch (error) {
      console.log(`error al eliminar ${clave} del producto con ${id} del producto ${error}`);
    }

  }

  const limpiarValores = () =>{
    window.localStorage.clear()
    window.localStorage.setItem(clave, JSON.stringify(valorInicial))
    setValorAlmacenado(valorInicial)
  }

  return [guardarValor, eliminarValor, limpiarValores, valorAlmacenado]
}

