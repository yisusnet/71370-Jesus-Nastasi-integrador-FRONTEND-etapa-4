import useValidacionFormularioContacto from "../hooks/useValidacionFormularioContacto";

const FormContacto = () => {
  const { formData, errors, handleInputChange, handleSubmit } = useValidacionFormularioContacto();

  return (
    <div className="contact__form">
      <form className="contact__form-1" id="formularioContacto" onSubmit={handleSubmit}>
        <fieldset className="contact__fieldset">
          <div className="contact__label-input">
            <label htmlFor="Nombres" className="contact__label">Nombre:</label>
            <input
              name="nombre"
              id="Nombres"
              type="text"
              className="contact__input"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
            <small data-error="Nombres-error">{errors.nombreError}</small>
          </div>

          <div className="contact__label-input">
            <label htmlFor="Apellidos" className="contact__label">Apellidos:</label>
            <input
              name="apellidos"
              id="Apellidos"
              type="text"
              className="contact__input"
              value={formData.apellidos}
              onChange={handleInputChange}
              required
            />
            <small data-error="Apellidos-error">{errors.apellidosError}</small>
          </div>

          <div className="contact__label-input">
            <label htmlFor="Correo" className="contact__label">Correo:</label>
            <input
              name="correo"
              id="Correo"
              type="email"
              className="contact__input"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />
            <small data-error="Correo-error">{errors.correoError}</small>
          </div>

          <div className="contact__label-input">
            <label htmlFor="Telefono" className="contact__label">Telefono:</label>
            <input
              name="telefono"
              id="Telefono"
              type="text"
              className="contact__input"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />
            <small data-error="Telefono-error">{errors.telefonoError}</small>
          </div>

          <div className="contact__textarea-label">
            <label htmlFor="Comentarios" className="contact__label">Comentarios</label>
            <textarea
              name="comentarios"
              id="Comentarios"
              className="contact__textarea"
              value={formData.comentarios}
              onChange={handleInputChange}
              required
            />
            <small data-error="Comentarios-error">{errors.comentariosError}</small>
          </div>

          <div className="contact__button">
            <button className="contact__button-enviar" type="submit">Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormContacto;


