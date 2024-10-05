import Swal from "sweetalert2";


const notificaSweet2 = ( onConfirm) => {
  
  Swal.fire({
    title: "Estas seguro que deseas vaciar el Carrito?",
    text: "Esto no se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, deseo vaciar el carrito",
    cancelButtonText: "no, no deseo vaciar el carrito"
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
      Swal.fire({
        title: "Ah sido Vaciado el Carrito!",
        text: "Carrito Vacio.",
        icon: "success"
      });
    }
  });
}

export default notificaSweet2
  

