import fs from "fs";

function copiar(entrada, salida) {
    fs.readFile(entrada, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("contenido:", data);
        fs.writeFile(salida, data, (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Archivo copiado correctamente");
        });
    });
}

export default copiar;