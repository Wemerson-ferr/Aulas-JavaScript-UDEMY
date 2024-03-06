const path =  require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivoEscrito.json');
const escreve = require('./escreverArquivo');
const ler = require('./lerArquivo');

const pessoas = [
    {nome: 'Wemerson'},
    {nome: 'Maria'}, 
    {nome: 'Antonia'},
    {nome: 'Lucas'}
];

const json = JSON.stringify(pessoas,'', 2);
escreve(caminhoArquivo, json); //Escreve o json gerado pelo objeto


async function lerArquivos(caminho){
    const dados = await ler(caminho);
    mostraDados(dados);

    criaObjeto(dados);
}

function mostraDados(dados){
    console.log(dados);
}

function criaObjeto(dadosBruto){
    objetoCriado = JSON.parse(dadosBruto);

    console.log('-------------------- Objeto em sí -----------------------------')
    console.log(objetoCriado);
}

lerArquivos(caminhoArquivo);//Lê o arquivo gerado