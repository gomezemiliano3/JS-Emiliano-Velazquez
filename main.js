

// *Algoritmo que indica si la contraseña es correcta o no, si la contraseña es correcta te saldrá un alert indicando que pudiste ingresar.

// Si la contraseña es incorrecta, te saldra que la contraseña es incorrecta, y tendras determinados intentos para ingresar la correcta antes de que se bloquee. *//

let userPrompt =prompt("Ingresa tu nombre de usuario");

let passwordPrompt =parseInt(prompt("Ingresa tu contraseña"));

let userName = ("emi");

let passwordUser = ("1234");

let intentos =4;

while (((userPrompt != userName) || (passwordPrompt != passwordUser)) && (intentos >1)) {
    intentos--;
    alert(`El nombre de Usuario o la contraseña son Incorrectos. Te quedan ${intentos} intentos`);
    usuarioPrompt =prompt("Ingresa tu nombre de usuario");
    passwordPrompt =parseInt(prompt("Ingresa tu contraseña"));

    if (intentos <= 1) {
        alert("Te quedaste sin intentos. Reestablece tu contraseña.")
        document.write("Reestablece tu contraseña haciendo click aqui.")
        }
}

if ((userPrompt == userName) && (passwordPrompt == passwordUser)) {
    alert("Ya puedes ingresar sesión.");
    }


//* el error que no pude solucionar, es que si en el primer prompt pones el nombre de usuario incorrecto y la contraseña correcta, en los prompts restantes aunque pongas todos los datos correctos no te va a dejar iniciar. *//
