const express = require('express');
const router = express.Router();
const graficoController = require('../controllers/graficoController');

router.get('/dados-grafico', graficoController.obterDados);
router.post('/salvar-dados', graficoController.salvarDados);

module.exports = router;