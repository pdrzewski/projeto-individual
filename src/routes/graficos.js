const express = require('express');
const router = express.Router();
const graficoController = require('../controllers/graficoController');

router.get('/dados-grafico', graficoController.obterDados);

module.exports = router;
