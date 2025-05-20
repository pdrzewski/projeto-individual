var express = require("express");
var router = express.Router();
const usuariosRouter = require('./usuarios');
const avisosRouter = require('./avisos');
const graficosRouter = require('./graficos')

router.use('/usuarios', usuariosRouter);
router.use('/avisos', avisosRouter);
router.use('/graficos', graficosRouter);

module.exports = router;



router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router;