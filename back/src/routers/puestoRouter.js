const express = require('express');

const puestoController = require('../controllers/puestoController');

const router = express.Router();


router.get('/', puestoController.obtenerTodos);

router.get('/:id', puestoController.obtenerPorId);

module.exports = router;