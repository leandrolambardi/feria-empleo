const puestoRepository = require('../repositories/puestoRepository');

async function obtenerTodos() {
    return await puestoRepository.obtenerTodos();
}

async function obtenerPorId(id) {
    return await puestoRepository.obtenerPorId(id);
}

async function crear(nombre) {
    const puestos = await puestoRepository.obtenerTodos();

    const nuevoId = puestos.length > 0
        ? Math.max(...puestos.map(puesto => puesto.id)) + 1
        : 1;

    const nuevoPuesto = {
        id: nuevoId,
        nombre: nombre,
        estado: 'AVAILABLE',
        turnoActualId: null
    };

    return await puestoRepository.crear(nuevoPuesto);
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear
};