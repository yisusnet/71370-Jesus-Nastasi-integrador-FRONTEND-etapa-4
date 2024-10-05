import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappContacto = () => {

  return (
    <div className="contact__whatsapp">
    <div className="contact__whatsapp-image">
      <img src="/img/logo-nico-contacto.webp" alt="logo nico" className="contact__whatsapp-image-logo" />
    </div>
    <h2 className="contact__whatsapp-h2">Pizzeria nico</h2>
    <NavLink to="#"  className="contact__whatsapp-link">
      <FontAwesomeIcon icon={faWhatsapp} className="contact__iconWhatsapp"  />Ir al Chat
      </NavLink>
  </div>
  )
}

export default WhatsappContacto
