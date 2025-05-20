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

module.exports = { obterDados };
