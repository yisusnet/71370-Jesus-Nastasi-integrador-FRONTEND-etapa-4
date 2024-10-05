

import './Card.scss'
import CarritoContext from '../context/CarritoContext'
import { useContext } from 'react'


const Card = ({producto}) => {


  const {agregarProductoAlCarritoContext} = useContext (CarritoContext)

  const handleAgregar = (producto) =>{
    agregarProductoAlCarritoContext(producto)

  }
  return (


    <div className="card" >
    <article className="card__article">
      <div className="card__image-container">
        <img
          src={producto.foto}
          alt={producto.nombre}
          title={producto.nombre}
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h2 className="card__heading">{producto.nombre}</h2>
        <div className="card__description">
          <p>
          {producto.descripcion}
          </p>
          <p className="card__precio"> {`Precio: 
          ${producto.precio}$`}
          </p>
        <button className="card__button" onClick={() => handleAgregar(producto)}>agregar</button>
        </div>
      </div>
    </article>
  </div>


  )
}

export default Card
