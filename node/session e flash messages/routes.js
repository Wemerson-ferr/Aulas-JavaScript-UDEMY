//Este arquivo serve para gerenciar somente nossas rotas nas aplicações, para isso, usaremos:
const express = require('express');
const route = express.Router();//Usado para definir um middleware e funcionar como manipulador de rota montável. Ele irá chamas as funções armazenadas na pasta src/controllers, delegando as execuções específicas a cada rota.
const homeController = require('./src/controllers/homeController');
const constatoController = require('./src/controllers/contatoController');
const meuMiddleWare = require('./src/middlewares/middleware');//Importando a função genérica de middleware que criamos de exemplo.

//Rotas da página home '/'
route.get('/', meuMiddleWare, homeController.paginaInicial);//Perceba que primeiro passa pelo middleware e depois vai para o controller.
route.post('/', meuMiddleWare, homeController.trataPost);

//Rotas de contato '/contato':
route.get('/contato', constatoController.paginaInicial);

module.exports = route;
