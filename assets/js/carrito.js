// const input = document.getElementById("validationDefault01").value;
// const boton = document.getElementById("Boton")
// boton.addEventListener("click",alerta);

(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    //Recorremos los forms y evitamos en envío sin validacion
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function mostrarTarjeta(){
    document.getElementById("Tarjeta").style.display="block";
  }
  function ocultarTarjeta(){
    document.getElementById("Tarjeta").style.display="none";
  }

// function alerta(){
//     alert("Se leccionaste : " + input )
// }



// document.getElementById("Boton").alert("hola")

// function mostrar_inputs(){
//     let validationDefault01 = document.getElementById("validationDefault01").value;
//     alert ("Acabas de agregar al carrito  : " + validationDefault01 + " piezas")
// }