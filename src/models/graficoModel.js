const database = require('../database/config');

function buscarDados() {
    const instrucao = `
        SELECT qtd_acertos FROM votos; 
    `;
    return database.executar(instrucao);
}

function inserirDados(acertos) {
    const instrucao = `
        INSERT INTO quiz (qtd_acertos) VALUES (${acertos});
    `;
    return database.executar(instrucao); // Adicionado return
}

module.exports = { buscarDados, inserirDados };