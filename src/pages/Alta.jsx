
import FormularioAlta from "../components/FormularioAlta"
import TablaProductos from "../components/TablaProductos"
import useTitulo from "../hooks/useTitulo"


const Alta = () => {

  useTitulo('Alta')
  
  return (
<> 



  
<div className="contenedor-main">
    <main className="main-contenido" >

    <FormularioAlta/>
<hr />
<TablaProductos/>
 
    </main>
    </div>



</>
  )
}

export default Alta
