//middlewares são funções intermediárias entre as comunicações de servidor - cliente. Podem acontecer antes, ou depois da execução das requisições.
//Por exemplo, todas as requisições feitas nesse servidor exemplo passarão por esse middleware genérico abaixo:
module.exports = (req, res, next) => {
    //importante dizer que o corpo da requisição (req.body) se mantém igual em toda a cadeia de middleware.
    console.log(req.body);
    console.log('middleware intermediário');
    next()//-> manda para a proxima função no tratamento das comunicação.
}