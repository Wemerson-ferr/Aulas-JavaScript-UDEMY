/* Object.prototype (pai de todos os objetos)
      |⤷ new object  (todo objeto, seja literal ou construido, terá o Object.prototype como pai por padrão, a não ser que modifiquemos)

*/
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype (chave implícita dentro de todo objeto que caso não modificada é igual a de Object.prototype)
    //objA.__proto__ === Object.prototype (true) Ou seja, ele herdou de Object

}

const Animal = {
    qtdPatas: 4,
    
}
const Gato = {
    nome: 'bolota',
    som: 'Miau'
}

Object.setPrototypeOf(Gato, Animal)
console.log(Gato.qtdPatas) // 4

console.log(Gato.__proto__ === Object.prototype);

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){//Criando a função atrelada ao prototype de Produto
    this.preco = this.preco - (this.preco *(percentual/100))
}

Produto.prototype.aumento = function(percentual){//Criando a função atrelada ao prototype de Produto
    this.preco = this.preco + (this.preco *(percentual/100))
}

const p1 = new Produto('Camisa', 50)

p1.desconto(10);
console.log(p1)//Produto { nome: 'Camisa', preco: 45 }

const p2 = {
    nome: 'Calça',
    preco: 80
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2)// Produto { nome: 'Calça', preco: 88 }

//outra forma

const p3 = Object.create(Produto.prototype,{
    atributoX:{
        writable: true,
        configurable: true,
        enumerable: true,
        value:'Qualquer Coisa'
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:'Short'
    },
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value:110
    },    
})

p3.aumento(15);

console.log(p3)//Produto { atributoX: 'Qualquer Coisa', nome: 'Short', preco: 126.5 }