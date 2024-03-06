//Para rodar o server, usar node ./server.js
//Após finalizar o teste, finalize, se abriu pelo terminal feche com Ctrl + C.
//Se tiver instalado no nodemon como dependência Dev, use npx nodemon ./server.js, um crie um script no package.json

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleWareGlobal = require('./src/middlewares/middlewareCentral'); //Importando middleware global. Ativando-o na linha 22 desta página


app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));//Definindo onde nossos aquivos estáticos ficaram, img, css, etc.

//Definindo onde nossas views ficarão (é o diretório onde os arquivos de modelo estão localizados).
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Configurando uma engine de renderização para arquivos, nesse caso o que mais se assemelha ao HTML é a ejs
app.set('view engine', 'ejs')



app.use(meuMiddleWareGlobal)//Nesse comando indicamos que o express irá usar esse middleware em TODAS as requisições.
app.use(routes)//Agora, neste aquivo ele terceiriza o gerenciamento de rotas para um arquivo router.js e pede ao express para usa-lo.



app.listen(3000);