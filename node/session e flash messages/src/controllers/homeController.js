//Controlador referente a página home de um site/aplicação

exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario);
    res.render('index', {
        titulo: 'Este é um título qualquer!!',
        numeros: [1,2,3,4,5,6,7,8]
    })
};

exports.trataPost = (req, res) => {
    //O nome da chave usado vem do text input form enviado no primeiro get lá em cima, por isso é importante tomar cuidado com esse campo no HTML
    res.send(`O corpo da requisição é ${req.body.nome}`);
};