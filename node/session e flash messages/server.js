require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONMONGO)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleWareGlobal = require('./src/middlewares/middlewareCentral'); //Importando middleware global. Ativando-o na linha 22 desta página

const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const clientPromise = Promise.resolve(mongoose.connection.getClient());

app.use(express.urlencoded({extended:true}));//habilita a recepção dos body dentro das requisições ao servidor

app.use(express.static(path.resolve(__dirname, 'public')));//Definindo onde nossos aquivos estáticos ficaram, img, css, etc.

const sessionOption = session({
    secret: 'soidhalsçhalskdhsihoaihwehdlknxclm',
    store: MongoStore.create({ 
        clientPromise,
        dbName: 'BASEDEDADOS'
     }),
     resave: false,
     saveUninitialized: false,
     cookie: {
         maxAge: 1000 * 60 * 60 * 24 * 7,
         httpOnly: true
     }
 })
app.use(sessionOption);
app.use(flash());


//Definindo onde nossas views ficarão (é o diretório onde os arquivos de modelo estão localizados).
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Configurando uma engine de renderização para arquivos, nesse caso o que mais se assemelha ao HTML é a ejs
app.set('view engine', 'ejs')

app.use(meuMiddleWareGlobal)//Nesse comando indicamos que o express irá usar esse middleware em TODAS as requisições.
app.use(routes)//Agora, neste aquivo ele terceiriza o gerenciamento de rotas para um arquivo router.js e pede ao express para usa-lo.


app.on('pronto', () => {
        app.listen(3000); 
})