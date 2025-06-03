const database = require('../database/config');

function buscarDados(idUsuario) {
    const instrucao = `
        SELECT v.id_usuario, v.qtd_acertos, u.nome 
        FROM quiz v 
        INNER JOIN usuario u ON v.id_usuario = u.id
        WHERE v.id_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function inserirDados(acertos, idUsuario) {
    const instrucao = `
        INSERT INTO quiz (qtd_acertos, id_usuario) 
        VALUES (${acertos}, ${idUsuario});
    `;
    return database.executar(instrucao);
}

module.exports = { buscarDados, inserirDados };