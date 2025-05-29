const graficoModel = require('../models/graficoModel');

async function obterDados(req, res) {
    try {
        const idUsuario = req.query.user_id; // Recebe o ID do usuário da query
        const dados = await graficoModel.buscarDados(idUsuario);
        res.json(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados do gráfico:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do gráfico" });
    }
}

async function salvarDados(req, res) {
    try {
        const { qtd_acertos, user_id } = req.body;
        await graficoModel.inserirDados(qtd_acertos, user_id);
        res.json({ success: true });
    } catch (erro) {
        console.error("Erro ao salvar dados:", erro);
        res.status(500).json({ erro: "Erro ao salvar dados" });
    }
}

module.exports = { obterDados, salvarDados };