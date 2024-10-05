
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const HeadersContacto = () => {
  return (
    

    <header className="contact__header">
      <div className="contact__header-h1-iconos">

        <h1 className="contact__h1-contactanos">Contactanos </h1>

        <div className="contact__redes-sociales">
          <NavLink to="#" className="contact__link-svg">
          <FontAwesomeIcon icon={faInstagram} className="contact__IconRedes" />
          
          </NavLink>
        </div>

        <div className="contact__redes-sociales">
          <NavLink to="#" className="contact__link-svg" >
          <FontAwesomeIcon icon={faFacebook} className="contact__IconRedes"  />
          </NavLink>
        </div>

        <div className="contact__redes-sociales">
          <NavLink to="#"  className="contact__link-svg">
          <FontAwesomeIcon icon={faTiktok} className="contact__IconRedes"   />
          </NavLink>
        </div>

        <div className="contact__redes-sociales">
          <NavLink to="#" className="contact__link-svg" >
          <FontAwesomeIcon icon={faXTwitter} className="contact__IconRedes"   />
          </NavLink>
        </div> 
        </div>
    </header>
  )
}

export default HeadersContacto
