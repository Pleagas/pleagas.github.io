const formulario = document.getElementById("a-form");
const inputs = document.querySelectorAll("#a-form input");
const form2 = document.getElementById("a-form2");
const inputs2 = document.querySelectorAll("#a-form2 input");
const botonRegistro = document.getElementById("vaciarForm");
const botonRegistro2 = document.getElementById("vaciarForm2");
const expresiones = {
    usuario: /^[a-zA-Z]{3,16}$/, // Letras de 3 a 16 digitos (pobre ossas)
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,12}$/, // 6 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
const campos = {
    nombre: false,
    apellido: false,
    password: false,
    mail: false,
    password2: false
};

/** es el mio que anda */

const validarCampo = (expresion, input, campo, mensaje) => {
    if (input.value === "") {
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-xmark");
        document.getElementById(`gropu__${campo}`).classList.remove("form__group-incorrecto");
        document.querySelector(`#gropu__${campo} .form__input-error`).classList.remove("form__input-error-activo");
        campos[campo] = false;
    } else if (expresion.test(input.value)) {
        document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
        document.querySelector(`#gropu__${campo} .form__input-error`).classList.remove("form__input-error-activo");
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#gropu__${campo} i`).classList.add("fa-circle-check");
        campos[campo] = true;
    } else {
        document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#gropu__${campo} i`).classList.add("fa-circle-xmark");
        document.getElementById(`gropu__${campo}`).classList.add("form__group-incorrecto");
        document.querySelector(`#gropu__${campo} .form__input-error`).classList.add("form__input-error-activo");
        campos[campo] = false;
    }
};
const validarCampo2 = (expresion, input, campo, mensaje) => {
    if (input.value === "") {
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-xmark");
        document.getElementById(`gropu__${campo}`).classList.remove("form__group2-incorrecto");
        document.querySelector(`#gropu__${campo} .form__input-error2`).classList.remove("form__input-error-activo");
        campos[campo] = false;
    } else if (expresion.test(input.value)) {
        document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
        document.querySelector(`#gropu__${campo} .form__input-error2`).classList.remove("form__input-error-activo");
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#gropu__${campo} i`).classList.add("fa-circle-check");
        campos[campo] = true;
    } else {
        document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
        document.querySelector(`#gropu__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#gropu__${campo} i`).classList.add("fa-circle-xmark");
        document.getElementById(`gropu__${campo}`).classList.add("form__group2-incorrecto");
        document.querySelector(`#gropu__${campo} .form__input-error2`).classList.add("form__input-error-activo");
        campos[campo] = false;
    }
};

const  validarPassword2 = () => {
    const inputPassword1 = document.getElementById("contraseña");
    const inputPassword2 = document.getElementById("contraseña2");


    if (inputPassword2.value == "") {
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-xmark")
        document.getElementById(`gropu__password2`).classList.remove("form__group-incorrecto")
        document.querySelector(`#gropu__password2 .form__input-error`).classList.remove("form__input-error-activo")
        campos[password] = false;
    } else if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-check")
        document.querySelector(`#gropu__password2 i`).classList.add("fa-circle-xmark")
        document.getElementById(`gropu__password2`).classList.add("form__group-incorrecto")
        document.querySelector(`#gropu__password2 .form__input-error`).classList.add("form__input-error-activo")
        campos[password] = false;
    } else {
        document.querySelector(`#gropu__password2 .form__input-error`).classList.remove("form__input-error-activo")
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-xmark")
        document.querySelector(`#gropu__password2 i`).classList.add("fa-circle-check")
        campos[password] = true;
        campos[password2] = true;
    }

}
const  validarPassword2b = () => {
    const inputPassword1 = document.getElementById("contraseñab");
    const inputPassword2 = document.getElementById("contraseña2b");


    if (inputPassword2.value == "") {
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-xmark")
        document.getElementById(`gropu__password2`).classList.remove("form__group2-incorrecto")
        document.querySelector(`#gropu__password2 .form__input-error2`).classList.remove("form__input-error-activo")
        campos[password] = false;
    } else if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-check")
        document.querySelector(`#gropu__password2 i`).classList.add("fa-circle-xmark")
        document.getElementById(`gropu__password2`).classList.add("form__group2-incorrecto")
        document.querySelector(`#gropu__password2 .form__input-error2`).classList.add("form__input-error-activo")
        campos[password] = false;
    } else {
        document.querySelector(`#gropu__password2 .form__input-error2`).classList.remove("form__input-error-activo")
        document.querySelector(`#gropu__password2 i`).classList.remove("fa-circle-xmark")
        document.querySelector(`#gropu__password2 i`).classList.add("fa-circle-check")
        campos[password] = true;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.usuario, e.target, "nombre", "mensaje");
            break;

        case "apellido":
            validarCampo(expresiones.usuario, e.target, "apellido", "mensaje2");
            break;
        case "password":
            validarCampo(expresiones.password, e.target, "password", "mensaje4");
            validarPassword2();
            break;
        case "email":
            validarCampo(expresiones.correo, e.target, "mail", "mensaje3");
            break;
        case "password2":
            validarCampo(expresiones.password, e.target, "password2", "mensaje5");
            validarPassword2();
            break;
    }
};
const validarFormulario2 = (e) => {
    switch (e.target.name) {
        case "nombre2":
            validarCampo2(expresiones.usuario, e.target, "nombre2", "campo");
            break;
        case "apellido":
            validarCampo2(expresiones.usuario, e.target, "apellido", "campo2");
            break;
        case "password":
            validarCampo2(expresiones.password, e.target, "password", "campo4");
            validarPassword2b();
            break;
        case "email":
            validarCampo2(expresiones.correo, e.target, "mail", "campo3");
            break;
        case "password2":
            validarCampo2(expresiones.password, e.target, "password2", "campo5");
            validarPassword2b();
            break;
    }
};

const borrarVacio = (e) => {

    switch (e.target.name) {
        case "nombre":
            if (e.target.value === "") {
                document.getElementById("mensaje").classList.remove("form_input-vacio-activo");
            }
            break;
        case "apellido":
            if (e.target.value === "") {
                document.getElementById("mensaje2").classList.remove("form_input-vacio-activo");
            }
            break;
        case "email":
            if (e.target.value === "") {
                document.getElementById("mensaje3").classList.remove("form_input-vacio-activo");
            }
            break;
        case "password":
            if (e.target.value === "") {
                document.getElementById("mensaje4").classList.remove("form_input-vacio-activo");
            }
            break;
        case "password2":
            if (e.target.value === "") {
                document.getElementById("mensaje5").classList.remove("form_input-vacio-activo");
            }
            break;
    }
};
const borrarVacio2 = (e) => {

    switch (e.target.name) {
        case "nombre2":
            if (e.target.value === "") {
                document.getElementById("campo").classList.remove("form_input-vacio-activo");
            }
            break;
        case "apellido":
            if (e.target.value === "") {
                document.getElementById("campo2").classList.remove("form_input-vacio-activo");
            }
            break;
        case "email":
            if (e.target.value === "") {
                document.getElementById("campo3").classList.remove("form_input-vacio-activo");
            }
            break;
        case "password":
            if (e.target.value === "") {
                document.getElementById("campo4").classList.remove("form_input-vacio-activo");
            }
            break;
        case "password2":
            if (e.target.value === "") {
                document.getElementById("campo5").classList.remove("form_input-vacio-activo");
            }
            break;
    }
};

const validarVacio = (e) => {

    switch (e.target.name) {
        case "nombre":
            if (e.target.value === "") {

                document.getElementById("mensaje").classList.add("form_input-vacio-activo")
            }
            break;
        case "apellido":
            if (e.target.value === "") {

                document.getElementById("mensaje2").classList.add("form_input-vacio-activo")
            }
            break;
        case "email":
            if (e.target.value === "") {

                document.getElementById("mensaje3").classList.add("form_input-vacio-activo")
            }
            break;
        case "password":
            if (e.target.value === "") {

                document.getElementById("mensaje4").classList.add("form_input-vacio-activo")
            }
            break;
        case "password2":
            if (e.target.value === "") {

                document.getElementById("mensaje5").classList.add("form_input-vacio-activo")
            }
            break;
    }

};
const validarVacio2 = (e) => {

    switch (e.target.name) {
        case "nombre2":
            if (e.target.value === "") {
                document.getElementById("campo").classList.add("form_input-vacio-activo")
            }
            break;
        case "apellido":
            if (e.target.value === "") {
                document.getElementById("campo2").classList.add("form_input-vacio-activo")
            }
            break;
        case "email":
            if (e.target.value === "") {
                document.getElementById("campo3").classList.add("form_input-vacio-activo")
            }
            break;
        case "password":
            if (e.target.value === "") {
                document.getElementById("campo4").classList.add("form_input-vacio-activo")
            }
            break;
        case "password2":
            if (e.target.value === "") {
                document.getElementById("campo5").classList.add("form_input-vacio-activo")
            }
            break;
    }
};

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("focus", validarVacio);
    input.addEventListener("blur", borrarVacio);
});

inputs2.forEach((input) => {
    input.addEventListener("keyup", validarFormulario2);
    input.addEventListener("focus", validarVacio2);
    input.addEventListener("blur", borrarVacio2);
});

formulario.addEventListener("submit", (e) => {
    if (campos.nombre && campos.apellido && campos.password && campos.mail && campos.password2) {
        console.log("Bien");
    } else {

        if (!campos.nombre) {
            let mensaje = document.getElementById("mensaje");
            document.querySelector(`#gropu__nombre .form__input-error`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            document.querySelector("#gropu__nombre i").classList.add("fa-circle-xmark");
            document.getElementById("gropu__nombre").classList.add("form__group-incorrecto");
            
            e.preventDefault();
        }

        if (!campos.apellido) {
            let mensaje = document.getElementById("mensaje2");
            document.querySelector(`#gropu__apellido .form__input-error`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            document.querySelector(`#gropu__apellido i`).classList.add("fa-circle-xmark");
            document.getElementById("gropu__apellido").classList.add("form__group-incorrecto");
            e.preventDefault();
        }

        if (!campos.mail) {
            let mensaje = document.getElementById("mensaje3");
            document.querySelector(`#gropu__mail .form__input-error`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            document.querySelector(`#gropu__mail i`).classList.add("fa-circle-xmark");
            document.getElementById("gropu__mail").classList.add("form__group-incorrecto");
            e.preventDefault();
        }

        if (!campos.password) {
            let mensaje = document.getElementById("mensaje4");
            document.querySelector(`#gropu__password .form__input-error`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            document.querySelector(`#gropu__password i`).classList.add("fa-circle-xmark");
            document.getElementById("gropu__password").classList.add("form__group-incorrecto");
            e.preventDefault();
        }
        if (!campos.password2) {
            let mensaje = document.getElementById("mensaje5");
            document.querySelector(`#gropu__password2 .form__input-error`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            document.querySelector(`#gropu__password2 i`).classList.add("fa-circle-xmark");
            document.getElementById("gropu__password2").classList.add("form__group-incorrecto");
            e.preventDefault();
        }

        let aviso = document.getElementById("vacio");
        aviso.classList.add("form_input-vacio-activo");

        setTimeout(() => {
            aviso.classList.remove("form_input-vacio-activo");
        }, 3000);

    }

});

form2.addEventListener("submit", (e) => {
    if (campos.nombre && campos.apellido && campos.password && campos.mail) {
        console.log("Bien");
    } else {
          if (!campos.nombre) {
            let mensaje = document.getElementById("campo");
            document.querySelector(`#gropu__nombre2 .form__input-error2`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo");
            e.preventDefault();
        }

        if (!campos.apellido) {
            let mensaje = document.getElementById("campo2");
            document.querySelector(`#gropu__apellido .form__input-error2`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo")
            e.preventDefault();
        }

        if (!campos.mail) {
            let mensaje = document.getElementById("campo3");
            document.querySelector(`#gropu__mail .form__input-error2`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo")
            e.preventDefault();
        }

        if (!campos.password) {
            let mensaje = document.getElementById("campo4");
            document.querySelector(`#gropu__password .form__input-error2`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo")
            e.preventDefault();
        }
        if (!campos.password2) {
            let mensaje = document.getElementById("campo5");
            document.querySelector(`#gropu__password2 .form__input-error2`).classList.remove("form__input-error-activo");
            mensaje.innerHTML = "➦ Falta llenar el campo";
            mensaje.classList.add("form_input-vacio-activo")
            e.preventDefault();
        }
        let aviso2 = document.getElementById("vacio2");
        aviso2.classList.add("form_input-vacio-activo");

        setTimeout(() => {
            aviso2.classList.remove("form_input-vacio-activo");
        }, 3000);
    }
});

botonRegistro2.addEventListener("click", function () {
    form2.reset();
    let mensajes = ["campo", "campo2", "campo3", "campo4", "campo5"];
    let definicion = ["nombre2", "apellido", "password", "mail", "password2"];
    campos.nombre = false;
    campos.apellido = false;
    campos.password = false;
    campos.mail = false;
    campos.password2 = false;
    for (let dato of definicion) {
        for (let mensaje of mensajes) {
            document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
            document.querySelector(`#gropu__${dato} i`).classList.remove("fa-circle-check");
            document.querySelector(`#gropu__${dato} i`).classList.remove("fa-circle-xmark");
            document.getElementById(`gropu__${dato}`).classList.remove("form__group2-incorrecto");
            document.querySelector(`#gropu__${dato} .form__input-error2`).classList.remove("form__input-error-activo");
            let aviso2 = document.getElementById("vacio2");
            aviso2.classList.remove("form_input-vacio-activo");
        }
    }
});

botonRegistro.addEventListener("click", function () {
    formulario.reset();
    let mensajes = ["mensaje", "mensaje2", "mensaje3", "mensaje4", "mensaje5"];
    let definicion = ["nombre", "apellido", "password", "mail", "password2"];
    campos.nombre = false;
    campos.apellido = false;
    campos.password = false;
    campos.mail = false;
    campos.password2 = false;
    for (let dato of definicion) {
        for (let mensaje of mensajes) {
            document.getElementById(`${mensaje}`).classList.remove("form_input-vacio-activo");
            document.querySelector(`#gropu__${dato} i`).classList.remove("fa-circle-check");
            document.querySelector(`#gropu__${dato} i`).classList.remove("fa-circle-xmark");
            document.getElementById(`gropu__${dato}`).classList.remove("form__group-incorrecto");
            document.querySelector(`#gropu__${dato} .form__input-error`).classList.remove("form__input-error-activo");
            let aviso = document.getElementById("vacio")
            aviso.classList.remove("form_input-vacio-activo");
        }
    }

});


