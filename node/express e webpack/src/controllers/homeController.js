//Controlador referente a página home de um site/aplicação

exports.paginaInicial = (req, res) => {
    res.render('index')
};

exports.trataPost = (req, res) => {
    //O nome da chave usado vem do text input form enviado no primeiro get lá em cima, por isso é importante tomar cuidado com esse campo no HTML
    res.send(`O corpo da requisição é ${req.body.nome}`);
};