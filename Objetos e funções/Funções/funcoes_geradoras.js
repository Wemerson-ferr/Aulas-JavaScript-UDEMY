//Funções geradoras executam um bloco de código em ordem a cada chamada. E cada bloco é denominado de yield e para chamalo, usamos o nomeDaFuncao.next()

function* geradora(){
    
    yield 'Primeiro bloco/ yield';
    yield 'Segundo bloco/ yield';
    yield 'terceiro bloco/ yield';
}

const g1 = geradora();



console.log(g1.next());//{ value: 'Primeiro bloco/ yield', done: false }
console.log(g1.next().value);//Primeiro bloco/ yield
console.log(g1.next());//{ value: 'Segundo bloco/ yield', done: false }

console.log(g1.next().value);//Segundo bloco/ yield
console.log(g1.next());//

console.log(g1.next().value);//terceiro bloco/ yield
console.log(g1.next());//

console.log(g1.next().value);//undefined
console.log(g1.next());//
