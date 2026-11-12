const fs = require('fs/promises');
const path = require('path');

const archivo = path.join(__dirname, '../data/puestos.json');

async function obtenerTodos() {
    const contenido = await fs.readFile(archivo, 'utf-8');

    return JSON.parse(contenido);
}



async function obtenerPorId(id) {
    const contenido = await fs.readFile(archivo, 'utf-8');
    const puestos = JSON.parse(contenido);

    return puestos.find(puesto => puesto.id === id);
}


module.exports = {
    obtenerTodos,
    obtenerPorId
};