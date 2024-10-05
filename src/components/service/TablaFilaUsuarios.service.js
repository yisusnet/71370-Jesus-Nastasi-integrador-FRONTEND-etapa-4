import Swal from "sweetalert2";


const notificaSweet = (nombre, onConfirm) => {
  
  Swal.fire({
    title: `¿estas seguro que deseas eliminar este Producto: ${nombre} ?`,
    text: "Esto no se puede retroceder!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `SI! deseo borrar este Producto: ${nombre}  `,
    cancelButtonText: `NO! no deseo borrar este Producto: ${nombre}  `
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
      Swal.fire({
        title: "el Producto fue Eliminado!",
        text: `este usuario: ${nombre}  `,
        icon: "success"
      });
    }
  });
}

export default notificaSweet
  

