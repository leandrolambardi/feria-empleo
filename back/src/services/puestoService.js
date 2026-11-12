const puestoRepository = require('../repositories/puestoRepository');

async function obtenerTodos() {
    return await puestoRepository.obtenerTodos();
}

async function obtenerPorId(id) {
    return await puestoRepository.obtenerPorId(id);
}


module.exports = {
    obtenerTodos,
    obtenerPorId
};