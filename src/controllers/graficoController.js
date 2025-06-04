const graficoModel = require('../models/graficoModel');

function obterDados(req, res) {
    const idUsuario = req.query.user_id;
    
    graficoModel.buscarDados(idUsuario)
        .then(dados => res.json(dados))
        .catch(erro => {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: "Erro ao buscar dados" });
        });
}

function salvarDados(req, res) {
    const { qtd_acertos, user_id } = req.body;
    
    graficoModel.inserirDados(qtd_acertos, user_id)
        .then(() => res.json({ success: true }))
        .catch(erro => {
            console.error("Erro ao salvar dados:", erro);
            res.status(500).json({ erro: "Erro ao salvar dados" });
        });
}

module.exports = { obterDados, salvarDados };