const database = require('../database/config');

function buscarDados() {
    const instrucao = `
        SELECT v.id_usuario, v.qtd_acertos FROM votos v inner join usuario u on v.id_usuario = u.id; 
    `;
    return database.executar(instrucao);
}

function inserirDados(acertos) {
    const instrucao = `
        INSERT INTO votos (qtd_acertos) VALUES (${acertos});
    `;
    return database.executar(instrucao);
}

module.exports = { buscarDados, inserirDados };