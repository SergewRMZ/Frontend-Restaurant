import Swal from 'sweetalert2';

export function mostrarAlertaError(mensaje: string) {
  Swal.fire({
    title: 'Error',
    text: mensaje,
    position: 'center',
    icon: 'error',
    timer: 1500,
    background: 'var(--color__primario)',
    color: '#fff',
    confirmButtonText: 'Aceptar',
    customClass: {
      confirmButton: 'swalButton'
    },

    buttonsStyling: false
  });
}
