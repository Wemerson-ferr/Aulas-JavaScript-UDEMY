const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  let contatos = []; // Definindo contatos como uma lista vazia

  if (req.session.user && req.session.user._id) {
    contatos = await Contato.buscaContatos(req.session.user._id);
  }
  res.render('index', {contatos});
};