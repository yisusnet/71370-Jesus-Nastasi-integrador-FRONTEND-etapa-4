import Navbar from "./Navbar";
import './Header.scss';
import SearchBar from "./SearchBar";

const Header = ({ onSearch, showSearchInputs }) => { 
  return (   
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <SearchBar onSearch={onSearch} showSearchInputs={showSearchInputs} />
    </header>
  );
}

export default Header;
