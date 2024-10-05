import { NavLink } from "react-router-dom"


const NavItem = ({item}) => {
  return (

    <li className="nav-bar__nav-item" key={item.id} >
    <NavLink to={item.ruta} className="nav-bar__nav-link"> {item.nombre} </NavLink>
  </li>

  )
}

export default NavItem
