// Objeto Produto -> Nome, Preco -> funções -> aumento, desconto

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    (this.preco += quantia); //Adicionando a função ao prototype de Produto
}  

Produto.prototype.desonto = function(quantia) {
    this.preco -= quantia;
} 

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)//Isso é como se chamássemos o super() em java, por exemplo.
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)//Se deixarmos assim, sem a linha de baixo o ObJeto será referenciado como um Produto, não como Camiseta.
Camiseta.prototype.constructor = Camiseta; // Define o construtor do ObJeto como Camiseta, para poder usufruir dos atributos específicos deste construtor.

Camiseta.prototype.aumento = function(percentual){
    this.preco += (this.preco * (percentual/100));//Especializando o método de aumento criado em Produto.
}

//A engine do JS vai procurar primeiro no Objeto que chamou a função, depois no prototype e depois no "pai" que nesse caso é o Produto.prototype;

const produto =  new Produto('Gen', 111);
const camiseta =  new Camiseta('Regata', 50, 'Preta');

console.log(produto)//Produto { nome: 'Gen', preco: 111 }
produto.aumento(100)
console.log(produto)//Produto { nome: 'Gen', preco: 211 }

console.log(camiseta)//Camiseta { nome: 'Regata', preco: 50, cor: 'Preta' }
camiseta.aumento(15)
console.log(camiseta)//Camiseta { nome: 'Regata', preco: 57.5, cor: 'Preta' }
