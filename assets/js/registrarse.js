const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    domicilio:  /^[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)* (((#|[nN][oO]\.?) ?)?\d{1,4}(( ?[a-zA-Z0-9\-]+)+)?)$/ //letras, numeros y caracteres cómo gato, guion.
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
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
            validarCampo(expresiones.email, e.target, "email");
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
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
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
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos["password"] = false;
    }else {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos["password"] = true;
    }
}
 
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.email && campos.password){
        
		document.getElementById('formulario__mensaje-win').classList.add('formulario__mensaje-win-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-win').classList.remove('formulario__mensaje-win-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
        formulario.reset();
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	} 
});