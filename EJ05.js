

import { URL } from "url";

function parsearUrl(direccion) {

    try {

        const url = new URL(direccion);

        const parametros = {};

        url.searchParams.forEach((valor, clave) => {
            parametros[clave] = valor;
        });

        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: parametros
        };

    } catch (error) {
        console.log("Se produjo un error:", error.message);
    }

}

export default parsearUrl;