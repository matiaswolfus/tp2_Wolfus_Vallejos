import countryToCurrency from "country-to-currency";

function obtenerMoneda(pais) {
    return countryToCurrency[pais];
}

export default obtenerMoneda;

