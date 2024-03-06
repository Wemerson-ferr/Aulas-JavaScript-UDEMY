module.exports = (req, res, next) => {
    //importante dizer que o corpo da requisição (req.body) se mantém igual em toda a cadeia de middleware.
    console.log(req.body);
    console.log('middleware intermediário que precede TODAS as requisições para meu servidor...');
    next()//-> manda para a proxima função no tratamento das comunicação.
}