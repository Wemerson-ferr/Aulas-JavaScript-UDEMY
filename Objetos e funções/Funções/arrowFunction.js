function FuncaoNormal() {
    this.valor = 42;

    setTimeout(function() {
        // Dentro dessa função normal, o valor de `this` não é mais o mesmo que no contexto de FuncaoNormal
        console.log(this.valor); // Isso não funcionará como esperado
    }, 1000);
}

function ArrowFunction() {
    this.valor = 42;

    setTimeout(() => {
        // Dentro dessa arrow function, o valor de `this` é capturado do contexto de ArrowFunction
        console.log(this.valor); // Isso funciona como esperado
    }, 1000);
}

const obj1 = new FuncaoNormal();
const obj2 = new ArrowFunction();
/**
 * No exemplo acima, a FuncaoNormal cria um novo valor de this dentro da função setTimeout, e esse valor não é mais o mesmo que o valor de this na função FuncaoNormal. Já a ArrowFunction captura o valor de this do contexto de ArrowFunction, e, portanto, ela consegue acessar this.valor corretamente.
 */