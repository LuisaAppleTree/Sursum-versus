const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    domicilio: /^[a-zA-Z0-9-ZÀ-ÿ\s \#\-]{1,40}$/ //letras, numeros y caracteres cómo gato, guion.
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    domicilio:false,
    password:false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, "apellido");
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, "email");
        break;
        case "domicilio":
            validarCampo(expresiones.domicilio, e.target, "domicilio");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-sharp fa-solid fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-solid fa-circle-xmark");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-sharp fa-solid fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-solid fa-circle-xmark");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById("password");
    const inputPassword2 = document.getElementById("password2");

    if(inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-sharp fa-solid fa-circle-check");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-solid fa-circle-xmark");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos["password"] = false;
    }else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-sharp fa-solid fa-circle-check");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-solid fa-circle-xmark");
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos["password"] = true;
    }
}
 
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if(campos.nombre && campos.apellido && campos.correo && campos.domicilio && campos.password){
        formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
        }, 5000);

        // document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
        //     icono.classList.remove("formulario__grupo-correcto");
        // });
    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});