import { useState } from 'react';

const useValidacionFormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    comentarios: '',
  });

  const [errors, setErrors] = useState({
    nombreError: '',
    apellidosError: '',
    correoError: '',
    telefonoError: '',
    comentariosError: ''
  });

  const chequeoMailRegexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const soloNumeros = /^\d+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validarCampo(name, value);
  };

  const validarCampo = (name, value) => {
    let errorMsg = '';
    
    switch (name) {
      case 'nombre':
        errorMsg = value.trim() === '' ? 'El nombre es obligatorio' : '';
        break;
      case 'apellidos':
        errorMsg = value.trim() === '' ? 'El apellido es obligatorio' : '';
        break;
      case 'correo':
        if (value.trim() === '') {
          errorMsg = 'El correo es obligatorio';
        } else if (!chequeoMailRegexp.test(value.trim())) {
          errorMsg = 'Debe ser un correo válido';
        }
        break;
      case 'telefono':
        if (value.trim() === '') {
          errorMsg = 'El teléfono es obligatorio';
        } else if (!soloNumeros.test(value.trim())) {
          errorMsg = 'Debe ingresar solo números';
        }
        break;
      case 'comentarios':
        if (value.trim() === '') {
          errorMsg = 'El comentario es obligatorio, mínimo 20 caracteres';
        } else if (value.trim().length < 20) {
          errorMsg = 'El comentario debe tener al menos 20 caracteres';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [`${name}Error`]: errorMsg
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = validarTodo();
    if (allValid) {
      console.log('Formulario válido:', formData);
      
      setFormData({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        comentarios: ''
      });
    } else {
      console.log('Formulario inválido, por favor revisa los campos.');
    }
  };

  const validarTodo = () => {
    let valid = true;
    Object.keys(formData).forEach((key) => {
      const error = validarCampo(key, formData[key]);
      if (error) {
        valid = false;
      }
    });
    return valid;
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
  };
};

export default useValidacionFormularioContacto;
