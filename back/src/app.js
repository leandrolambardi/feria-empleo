const express = require('express');
const puestoRouter = require('./routers/puestoRouter');
const app = express();


app.use(express.json());

app.use('/api/puestos', puestoRouter);

module.exports = app;