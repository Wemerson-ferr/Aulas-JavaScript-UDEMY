const vetor = ['pera','uva', 'maça', 'goiaba', 'abacaxi'];

//For tradicional:
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}
console.log("")
//for in, itera altomaticamente entre indices e pode ser usado para iterar sobre objetos.
const pessoa = {
    nome: 'Wemerson',
    sobrenome: 'Ferreira',
    idade: 30
}
console.log("")
for(let dados in pessoa){
    console.log(dados)//Imprime o nome da variável, não o valor
    console.log(pessoa[dados])//Acessa o valor da variável dentro de pessoa
}
console.log("")
//for of: para objetos iteráveis, como vetores e string
const nomes = ['Wemerson', 'Lucas', 'Antonio', 'Pedro'];

for(let valor of nomes){
    console.log(valor)//Perceba que ele já nos retorna o valor diretamente, ao contrário de for in.
}

