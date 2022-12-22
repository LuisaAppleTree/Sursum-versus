const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {

	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
    email: false,
    password:false
}
const validarFormulario = (e)=>{
    switch(e.target.name){
        case "email":
            validarCampo(expresiones.email, e.target, "email");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
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

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
	if (email && password){
        formulario.reset();
    }
});