import { useContext, useEffect, useState } from 'react';
import './FormularioAlta.scss'
import ProductosContext from '../context/ProductosContext';

const FormularioAlta = () => {

  const formInicial = {
    id:null,
    nombre: '',
    precio: '',
    stock: '',
    foto: '',
    categoria: '',
    descripcion: '',
    envio: false,
  }


  const [form, setForm] = useState(formInicial);

  const {creandoProductoContext, productosEditado, setProductosEditado, ActualizarProductoContext } = useContext(ProductosContext)
  

  useEffect(() => {
    productosEditado ? setForm(productosEditado) : setForm(formInicial)
  }, [productosEditado])

  const handleSubmit =  async (e) => {
    e.preventDefault()
    try {

      if(form.id === null) {
        await creandoProductoContext(form)
      }else{

       
        await ActualizarProductoContext(form)
       
      }
      
    } catch (error) {throw new Error("Algo salio mal en el [handleSubmit]", error);
    
      
    }
    handleReset()
  }

  const handleChange = (e) => {

    const {name, value, checked, type} = e.target

    setForm({
      ...form, [name]: type === 'checkbox' ? checked : value
    })

  }

  const handleReset = () => {
    setForm(formInicial)
    setProductosEditado(formInicial)

  }







  return (
    <>


  <div className="form-contenido">
<form className='Formu-contenedor' onSubmit={handleSubmit}>
<h3 className='Formu-contenedor__h3'  >Formulario de {form.id ? 'Editar' : 'Agregar'}</h3>

  <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label' htmlFor="lbl-nombre">Nombre</label>
      <input className='Formu-contenedor__input'
       type="text"
        name="nombre"
         id="lbl-nombre" 
         required
         value={form.nombre}
         onChange={handleChange}
         />
  </div>

   <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label'  htmlFor="lbl-precio">Precio</label>
      <input  className='Formu-contenedor__input' type="number" 
      name="precio"
       id="lbl-precio" 
        required
        value={form.precio}
        onChange={handleChange}
        />
    </div>
     
    <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label'  htmlFor="lbl-stock">Stock</label>
      <input
         className='Formu-contenedor__input'
          type="number" 
          name="stock"
           id="lbl-stock" 
            required
            value={form.stock}
            onChange={handleChange}
            />
   </div>


    <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label'  htmlFor="lbl-foto">Foto</label>
      <input  
      className='Formu-contenedor__input'
       type="zz" 
       name="foto"
        id="lbl-foto"
         required
         value={form.foto}
         onChange={handleChange}
         />
    </div>


    <div className='Formu-contenedor__label-input'>
  <label className='Formu-contenedor__label' htmlFor="lbl-categoria">Categoría</label>
  <select
   className='Formu-contenedor__Select' 
   name="categoria" 
   id="lbl-categoria" 
   required
   value={form.categoria}
   onChange={handleChange}
   >
    <option value="" disabled defaultValue>Selecciona una opción</option>
    <option value="Tradicional">Tradicional</option>
    <option value="Especial">Especial</option>
    <option value="Bebida">Bebida</option>
  </select>
</div>

     <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label'  htmlFor="lbl-descripcion">Descripcion</label>
      <input  

      className='Formu-contenedor__input'
        type="text" 
        name="descripcion" 
      id="lbl-descripcion"
       required
       value={form.descripcion}
       onChange={handleChange}
       />
    </div>

   <div  className='Formu-contenedor__label-input'>
      <label className='Formu-contenedor__label'  htmlFor="lbl-envio">Envio</label>
      <input 
  className='Formu-contenedor__inputcheckbok' 
  type="checkbox" 
  name='envio'
  id="lbl-envio" 
  checked={form.envio}
  onChange={handleChange}
/>
    </div>
      


      <button
       type="submit" 
       className='Formu-contenedor__button-guardar'
       > Guardar</button>



      <button type="reset"  className='Formu-contenedor__button-limpiar' onClick={handleReset} >Limpiar</button>


</form>
</div>

    </>
  )
}

export default FormularioAlta
