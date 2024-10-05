import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './DetalleProducto.scss'
import { NavLink } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';

const DetalleProducto = () => {

  useTitulo('Detalle-Productos')

const [producto, setProducto] = useState([])

const {idProducto} = useParams()

const url = import.meta.env.VITE_BACKEND_PRODUCTOS


useEffect(() => {
  getOneProducto(idProducto)
    
  }, [])

  const getOneProducto = async (id) => {

    try {

      const urlGetOne = url + id

      console.log('URL:', urlGetOne); // Para verificar si la URL es correcta

      const res = await fetch (urlGetOne)

      if(!res.ok){
        throw new Error("no se pudo obtener el producto" , res.status);
        
      }

      const data = await res.json()

      setProducto (data)


      
    } catch (error) {
      console.error('ah ocurrido un error [getOneProducto]')
    }

  }




  return (
<div className="contenedorprincal">
<div className="contenedorDetalle">
<main className="contenedorDetalle__main-contenido" >

<h1 className="contenedorDetalle__h1">Detalles Del Producto </h1>

  <p className="contenedorDetalle__main-contenido"><strong>Producto:</strong> {producto.nombre}</p>

  <hr />
  
  <p className="contenedorDetalle__main-contenido"><strong>Descripcion:</strong> {producto.descripcion}</p>
  <hr />
  <p className="contenedorDetalle__main-contenido"><strong>categoria:</strong> {producto.categoria}</p>
  <hr />
  <p className="contenedorDetalle__main-contenido"><strong>Precio</strong> {`${producto.precio}$`}</p>
  <hr />
 <NavLink to='/Alta'> <button className="contenedorDetalle__button" >Volver a Alta</button></NavLink>
 <NavLink to='/'> <button className="contenedorDetalle__button" >Volver a Inicio</button></NavLink>
  </main>
</div>
</div>
  )
}

export default DetalleProducto
