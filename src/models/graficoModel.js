const database = require('../database/config');

function buscarDados() {
    const instrucao = `
        SELECT qtd_acertos FROM votos; 
    `;
    return database.executar(instrucao);
}

function inserirDados(acertos) {
    const insertInstru = `
        INSERT into votos (qtd_acertos) VALUES (${acertos});
    `
}

module.exports = { buscarDados };
