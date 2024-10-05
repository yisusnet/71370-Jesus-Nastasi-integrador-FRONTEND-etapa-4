import { useEffect } from "react"


const useTitulo = (textoTitulo = 'sin titulo') =>{
  useEffect(() => {
 document.title = (`${textoTitulo} `)
  }, [])
  
}

export default  useTitulo
