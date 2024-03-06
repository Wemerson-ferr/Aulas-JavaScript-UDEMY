const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login(){
    this.valida();
    if(this.errors.length > 0) return;

    this.user = await LoginModel.findOne({email: this.body.email});

    if(!this.user) {
      this.errors.push('Dados incorretos');
      return;
    }

    if(!bcrypt.compareSync(this.body.password, this.user.password)){
      this.errors.push('Senha inválida');
      this.user = null;
      return;
    }
  }

  async register(){
    this.valida();
    if(this.errors.length > 0) return;
    
    await this.userExists();

    if(this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync(10);//Gera um salt para a senha, para "criptografa-la"
    this.body.password = bcrypt.hashSync(this.body.password, salt);//Transforma a senha original em uma string misturada
  
    this.user = await LoginModel.create(this.body);
  }

  async userExists(){
    this.user = await LoginModel.findOne({email: this.body.email});
    if(this.user) this.errors.push('Usuário já existe.');

  }

  valida(){
    this.cleanUp();
    //Validação de campos

    //Email precisa ser válido
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    if(!validator.isStrongPassword(this.body.password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
      this.errors.push('Senha inválida, a senha deve conter mais de 8 caracteres sendo letra minuscula, maiúscula e símbolos');
    }
  
    // Verificar se as senhas são iguais
    if(! this.body.password == this.body.password_confirm) this.errors.push('As senhas não são iguais');
  
    // Se não houver erros, atualize o corpo para enviar ao banco
    if(this.errors.length === 0){
      this.body = {
        email: this.body.email,
        password: this.body.password,
        //removemos a confirmação de senha para enviar ao banco
      }
    }
  }

  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
      password_confirm: this.password_confirm//Confirmação da senha
    }

  }
}

module.exports = Login;
