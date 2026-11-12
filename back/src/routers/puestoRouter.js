const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        mensaje: 'API de puestos funcionando correctamente'
    });
});

module.exports = router;
