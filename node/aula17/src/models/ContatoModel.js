const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  celular: { type: String, required: false, default: '' },
  endereco: { type: String, required: false, default: '' },
  owner: {type: String, required: true},
  criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {

  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
  }

  valida() {
    this.cleanUp();

    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if (!this.body.email && !this.body.celular) this.errors.push('Pelo menos uma forma de contato é obrigatória, celular ou email');
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      celular: this.body.celular,
      endereco: this.body.endereco,
      owner: this.body.owner
    }
  }

  
  async edit(id){
    if(typeof id !== 'string') return;
    
    this.valida();
    
    if(this.errors.length > 0) return;
    
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
  }

  //Métodos estáticos da classe

  static async buscaPorId(id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
  }

  static async buscaContatos(owner) {
    const contatos = await ContatoModel.find({owner})
      .sort({ criadoEm: -1});
    return contatos;
  }

  static async delete(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete(id);
    return contato;
  }
}


module.exports = Contato;
