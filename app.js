require('colors')

// Importar el módulo 'text' desde el archivo './functions/text'
const text = require(`./proy_modules/text`);

// Función principal
const main = async () => {
    console.clear();

    const nombres = "CristIan ALExAnder";
    const apellidos = "PiMienTO GoNZALEZ";

    const nombreCompleto = `${nombres[0].toUpperCase()}${nombres.substring(1).toLowerCase()} ${apellidos[0].toUpperCase()}${apellidos.substring(1).toLowerCase()}`;

    text.mostrarNombreSecuencial(nombreCompleto);
    text.mostrarNombreSecuencialImvertido(nombreCompleto);

    console.log(`${nombres.toUpperCase().magenta} ${apellidos.toUpperCase().gray}`);
    console.log(`${nombres.toLowerCase().magenta} ${apellidos.toLowerCase().gray}`);
    console.log(nombreCompleto.blue);
};

// Llamar a la función principal
main();






