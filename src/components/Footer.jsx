import { NavLink } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <div className="footer-header__logo-container">
          <NavLink to="/">
            <img
              src="/img/logo-nico-footer.webp"
              className="footer-header__image-logo"
              alt="logo-nico"
            />
          </NavLink>
        </div>

        <div className="footer-header__container">
          <div className="footer-header__h3">
            <h3>Conocenos</h3>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Dirección del local</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">+5499134562112</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Contáctanos Whatsapp</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Información legal</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Términos y condiciones de uso</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Política de privacidad</NavLink>
          </div>
        </div>

        <div className="footer-header__container">
          <div className="footer-header__h3">
            <h3>Redes sociales</h3>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Instagram</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Facebook</NavLink>
          </div>
        </div>

        <div className="footer-header__container">
          <div className="footer-header__h3">
            <h3>Mi cuenta</h3>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Pedir</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Pizza Points</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Mis Pedidos</NavLink>
          </div>

          <div className="footer-header__link-footer">
            <NavLink to="#" className="footer-header__link">Mis direcciones</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
