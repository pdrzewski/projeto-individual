var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var usuario = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(usuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.autenticar(usuario, senha)
                             .then((resultadoUsuario) => {
                                 if (resultadoUsuario.length > 0) {
                                     res.json({
                                         id: resultadoAutenticar[0].id,
                                         usuario: resultadoAutenticar[0].usuario,               
                                         senha: resultadoAutenticar[0].senha,
                                     });
                                 } else {
                                     res.status(204).json({ usuario: [] });
                                 }            
                             })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var usuario = req.body.emailServer;
    var senha = req.body.senhaServer;

     if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else {

        usuarioModel.cadastrar(usuario, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}