let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");



let numeroMinimoCaracteres = 8;

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡!@#$%^&*()/=¿?-+";

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);


    if (numeroDigitado < numeroMinimoCaracteres){
        alert("La cantidad de caracteres debe ser mayor que 8");
    }

    let password = "";
    for(let i = 0; i<numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random()*(cadenaCaracteres.length))];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    console.log(password);
    contrasena.value = password;
    validacionContrasena(password)

    
}


function reiniciar(){
    cantidad.value = "";
    contrasena.value = "";
    document.getElementById("mensaje-validacion").innerHTML = "";
}


function validacionContrasena(password){
    let message = "La contraseña generada es segura";
    let errores = [];

    if (password.length < numeroMinimoCaracteres) {
        errores.push('La contraseña requiere mínimo 8 caracteres.');
    } 

    if (!password.match(/[A-Z]/)) {
        errores.push('La contraseña requiere por lo menos una letra mayúscula.');
    }

    if (!password.match(/[a-z]/)) {
        errores.push('La contraseña requiere por lo menos una letra minúscula.');
    }

    if (!password.match(/\d/)) {
        errores.push('La contraseña requiere por lo menos un número.');
    }

    if (!password.match(/[^a-zA-Z\d]/)) {
        errores.push('La contraseña requiere por lo menos un carácter especial.');
    }

    if (errores.length > 0) {
        message = errores.join(' ');
    }

    console.log(message);
    console.log(`Mostrado explicitamente ${message}`);
    document.getElementById("mensaje-validacion").innerHTML = message; 
    
}







