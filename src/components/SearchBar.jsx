import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'; 
import MenuToogle from "./MenuToogle";
import logoNico from '../assets/logo-nico.webp';
import { useContext, useState } from "react";
import CarritoContext from "../context/CarritoContext";
import './SearchBar.scss'

const SearchBar = ({ onSearch, showSearchInputs }) => {
  const [busquedaTermino, setBusquedaTermino] = useState('');
  const { carrito } = useContext(CarritoContext
  ); 

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setBusquedaTermino(term);
    onSearch(term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busquedaTermino);
  };

  const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);



  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <NavLink to="/">
          <img
            src={logoNico}
            className="search-bar__image-logo"
            alt="logo-nico"
          />
        </NavLink>
      </div>

      {showSearchInputs && (
        <form className="search-bar__form-container" onSubmit={handleSubmit}>
          <label htmlFor="busqueda" className="search-bar__form-label">
            Encuentra tu pizza favorita!
          </label>

          <input 
            type="search" 
            className="search-bar__form-search" 
            id="busqueda" 
            value={busquedaTermino} 
            onChange={handleSearchChange} 
            placeholder="¿Que articulo desea buscar?"
          />

          <input type="submit" className="search-bar__form-submit" value="Buscar" />
        </form>
      )}

<div className="search-bar__carrito-container">
        <NavLink to="/carrito">
          <FontAwesomeIcon icon={faBasketShopping} className="search-bar__iconocarrito" />
        </NavLink>
          {totalProductos > 0 && <strong><span className="carrito-count">{totalProductos}</span></strong>} 
      </div>

      <MenuToogle />
    </div>
  );
}

export default SearchBar;


