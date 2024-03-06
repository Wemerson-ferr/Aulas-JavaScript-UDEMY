function funcaoB(){
    console.log('Sou uma função do modula B sendo exportada no node')
}

const nome = 'Const da função B'

module.exports.funcaoB = funcaoB;
module.exports.nome = nome;