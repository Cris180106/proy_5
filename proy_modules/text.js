// Declaración de la contante text
const text = {};

// Función para mostrar el nombre secuencial invertido
const mostrarNombreSecuencialImvertido = (nombre) => {
    let nombres = nombre.length - 1;
    let nombreCompleto = '';
    let nums = 1;
    while (nombres >= 0) {
        nombreCompleto = nombreCompleto + nombre[nombres];
        console.log(nums + "  " + nombreCompleto.white);
        nombres--;
        nums++;
    }
};

// Función para mostrar el nombre secuencial
const mostrarNombreSecuencial = (nombre) => {
    let nombres = "CristIan ALExAnder";
    let apellidos = "PiMienTO GoNZALEZ";
    let nombreCompleto = nombres[0].toUpperCase() + nombres.substring(1).toLowerCase() + " " + apellidos[0].toUpperCase() + apellidos.substring(1).toLowerCase();
    let textos = nombreCompleto.length;
    while (textos > 0) {
        console.log(textos + "  ".white + nombreCompleto.substring(0, textos).blue);
        textos--;
    }
};

// se asignan las funciones a text
text.mostrarNombreSecuencial = mostrarNombreSecuencial;
text.mostrarNombreSecuencialImvertido = mostrarNombreSecuencialImvertido;

// Exportar 
module.exports = text;


 