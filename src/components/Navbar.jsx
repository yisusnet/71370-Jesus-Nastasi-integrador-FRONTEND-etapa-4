import NavItem from "./NavItem"
import menuItems from "./Constant/menuItems"


const Navbar = () => {
  return (
    <nav className="nav-bar">
    <ul className="nav-bar__nav-list">


      {
       menuItems.map((item) =>
        <NavItem key={item.id} item={item}/>   ) 
      }

    </ul>
  </nav>
  )
}

export default Navbar
