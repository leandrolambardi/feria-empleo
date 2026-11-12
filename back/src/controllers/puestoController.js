const puestoService = require('../services/puestoService');

async function obtenerTodos(req, res) {
    try {
        const puestos = await puestoService.obtenerTodos();

        res.json(puestos);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los puestos'
        });
    }
}

async function obtenerPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const puesto = await puestoService.obtenerPorId(id);

        if (!puesto) {
            return res.status(404).json({
                mensaje: 'Puesto no encontrado'
            });
        }

        res.json(puesto);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener el puesto'
        });
    }
}






module.exports = {
    obtenerTodos,
    obtenerPorId
};