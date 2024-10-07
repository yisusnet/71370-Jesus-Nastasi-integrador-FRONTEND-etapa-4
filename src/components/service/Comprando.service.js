import Swal from "sweetalert2";


const notificaSweet3 = () => {
  
  Swal.fire({
    title: "¡Gracias por su compra!",
    text: "Lo devolveremos a inicio!",
    imageUrl: "../img/pago-exitoso.webp",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}

export default notificaSweet3
  

