const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    //Tudo que vier aqui dentro desse objeto será uma formatação dos dados dentro do banco
    titulo: { type: String, required: true},//Por exemplo esse item terá um título
    mensagem: String//E uma mensagem
});

class Home {
    
}

const HomeModel = mongoose.model('Home', HomeSchema); //Aqui criamos o modelo para posterior exportação;
module.exports = HomeModel;