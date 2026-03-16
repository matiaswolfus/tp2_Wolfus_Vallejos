import {countries, currencies} from "country-data";

function obtenerMoneda(pais) {
    const paisEncontrado = countries[pais]

    if (paisEncontrado) {
        const monedaEncontrada = currencies[paisEncontrado.currency];
        return monedaEncontrada;
    }
}

export default obtenerMoneda;
