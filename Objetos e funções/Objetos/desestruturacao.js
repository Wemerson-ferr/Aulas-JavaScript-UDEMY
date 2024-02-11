const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [valor1, valor2, valor3, valor4] = vetor; //Crias as constantes valor1 a valor4 e salva em ordem os valores de dentro do array.

console.log(valor1, valor2, valor3, valor4);

/** ------------------------------------------------------------------------------ */
const outroVetor = [100, 200, 300, 400, 500, 600, 700];

let [outrosValores1, outrosValores2, outrosValores3, ...resto] = outroVetor;
console.log(resto)// Saída: [ 400, 500, 600, 700 ], ou seja o operador ... pega o resto dos valores que não foram atribuídos a variáveis e cria um novo vetor. '...' chamado de rest, ou spread (resto ou espalhar).

/**Desestruturação de objetos: */
const pessoa = {
    nome: 'Wemerson',
    sobrenome: 'Ferreira',
    endereco: {
        rua: 'Av Brasil',
        numero: 99,
        bairro: 'Rio Branco'
    }
}

//Atribuição por desestruturação:
const { nome } = pessoa; //Irá criar uma variável nome fora do objeto pessoa, com o mesmo valor da que existe internamente.

//Posso ainda usar o valor e atribui-lo a uma variável de nome diferente:
const { nome: usuario, sobrenome } = pessoa;
console.log(usuario, sobrenome)// Saida: Wemerson Ferreira, ou seja, extrai o nome e o salvei em uma variável chamada usuario.

//Posso modificar o nome da variável recebido pelo objeto também, caso ela não exista.
const outraPessoa = {
    nome_usuario: '',
    sobrenome: 'Biribinha',
    endereco: {
        rua: 'Av Brasil',
        numero: 99,
        bairro: 'Rio Branco'
    }
}

const { nome_usuario: novoUsuario = 'Brito', sobrenome: novoSobrenome } = outraPessoa;
console.log(novoUsuario, novoSobrenome)// Saida: Brito Biribinha, ou seja, cria uma variável esperando o nome, porém como ele não existe, é criado com o valor escolhido. 

//Podemos também usar o rest ou spead com os objetos:
const outraPessoa1 = {
    nome_usuario1: 'UsuárioAleatório',
    sobrenome: 'Biribinha',
    endereco: {
        rua: 'Av Brasil',
        numero: 99,
        bairro: 'Rio Branco'
    }
}

const {nome_usuario1, ...restoDoUsuario1} = outraPessoa1;
console.log(restoDoUsuario1);//Saída: { sobrenome: 'Biribinha', endereco: { rua: 'Av Brasil', numero: 99, bairro: 'Rio Branco' }} -> tudo, menos o nome.

