const database = require('../database/config');

function buscarDados() {
    const instrucao = `
        SELECT qtd_acertos FROM votos; 
    `;
    return database.executar(instrucao);
}

module.exports = { buscarDados };
