import { IframeMaps } from '../components/IframeMaps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import FormContacto from '../components/FormContacto';
import HeadersContacto from '../components/HeadersContacto';
import WhatsappContacto from '../components/WhatsappContacto';
import './Contacto.scss';
import useTitulo from '../hooks/useTitulo';

const Contacto = () => {
  useTitulo('Contacto')
  return (
    <div className="contenedor-main">
      <main className="main-contenido">
        <HeadersContacto />

        <div className="contact__form-whatsapp">
          <FormContacto />
          <WhatsappContacto />
        </div>

        <div className="contact__maps">
          <p className="contact__parrafo-direction">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="contact__IconDireccion"
            />
            Direccion: Av. Avellaneda 1240, Cdad. Autónoma de Buenos Aires,
            Argentina
          </p>
          <IframeMaps />
        </div>
      </main>
    </div>
  );
};

export default Contacto;
