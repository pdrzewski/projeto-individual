const graficoModel = require('../models/graficoModel');

async function obterDados(req, res) {
    try {
        const dados = await graficoModel.buscarDados();
        res.json(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados do gráfico:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do gráfico" });
    }
}

async function salvarDados(req, res) {
    try {
        const { qtd_acertos } = req.body;
        await graficoModel.inserirDados(qtd_acertos);
        res.json({ success: true });
    } catch (erro) {
        console.error("Erro ao salvar dados:", erro);
        res.status(500).json({ erro: "Erro ao salvar dados" });
    }
}

module.exports = { obterDados, salvarDados };