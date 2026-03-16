import { readFile, writeFile } from "fs/promises";

async function copiar(entrada, salida) {
    const contenido = await readFile(entrada, "utf8");
    await writeFile(salida, contenido);
}

export default copiar;