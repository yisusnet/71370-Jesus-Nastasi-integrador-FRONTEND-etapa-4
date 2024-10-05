

const helperPeticionesHttp = async (url, options = {method: 'GET'}) =>
{
  try {

    const res =  await fetch (url, options)
if(!res.ok)throw new Error(`No se pudo realizar la petición. Estado: ${res.status}`)
     const data = await res.json()
      return data

    
    
  } catch (error) {
    console.error ('[helperPeticionesHttp]' ,error )
    
  }
}

export default helperPeticionesHttp
