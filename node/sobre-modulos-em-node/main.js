//Como caminhar nas pastas 
// para procurar dentro das pastas ./pasta1/pasta2/arquivoAlvo --> um ponto indica onde estamos.
// Para subir na hierarquia de pastas ../../PastaX/arquivoAlvo --> dois pontos sobe uma pasta de onde o arquivo que estamos editando está (não o alvo!!)

//Variáveis úteis no node para arquivos e diretórios, precisa chamar o const path
// __filename -> pega o caminho do arquivo ao qual é chamado até o nome do arquivo.
// __dirname -> pega o nome da pasta onde o arquivo em qual é chamado está

const funcaoA = require('./modA').funcaoA;//Uma maneira de importar somente o que precisa
const {funcaoB, nome} = require('./modB');//Outra maneira de importar tuco

funcaoA();
funcaoB();
console.log(nome);

console.log(__filename+' e ' +__dirname);//d:\Aulas JavaScript UDEMY\node\sobre-modulos-em-node\main.js e d:\Aulas JavaScript UDEMY\node\sobre-modulos-em-node