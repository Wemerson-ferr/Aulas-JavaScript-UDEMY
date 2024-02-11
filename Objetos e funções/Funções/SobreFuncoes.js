/** Existem diversas formas de se criar uma função em JavaScript */

//Da maneira tradicional, com a palavra function + nome da função (){}
function funcaoExempo(){

}

//Criando ela dentro de uma variável, nesse caso, para chama-la, usariamos o nome da variável mais parentes, 
//como uma função normal -> funcao() // Chamado também de função anonima, pois não tem um nome próprio
let funcao = function(){
    console.log("uma função")
};

//Arrow function, basicamente uma função anonima também
//A principal diferença é que as arrow functions não têm seu próprio this; em vez disso, elas capturam o valor de this do contexto circundante no momento em que são criadas. 
//Isso é conhecido como "lexically scoped this" (this com escopo léxico). Vide o arquivo arrowFunction.js
let outraFuncao = () => {
    console.log("Sou uma arrow function")
}
//Arrow function como parâmetro:
let vetorQualquer = [1,2,3,4,5,6,7,8,9];

vetorQualquer.forEach(valorEmVetor => console.log(valorEmVetor))//Imprime os valores dos vetores.


//Dentro de objetos, para chamar usamo nomeObjeto.nomeFuncao()
const pessoa = {
    fala(){
        console.log("Bla blabla bla")
    }
}

