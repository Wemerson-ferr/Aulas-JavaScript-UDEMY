
//Método splice(indiceAlvo, qtd_a_remover, elemento_a_adicionar1, elemento_a_adicionar2, elemento_a_adicionar3,...);

    //             -5       -4       -3         -2         -1
    //              0        1        2          3          4
    let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

    //Usando a sintaxe do splice, podemos substituir muitos dos métodos de modificação de arrays.
    //Por exemplo, o unshift - inserir no inicio.
    nomes.splice(0, 0, 'Wemerson');
    console.log(nomes)//[ 'Wemerson', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]

    //Ou remover no final, como o pop()

    const removidos = nomes.splice(nomes.length -1, 1);
    console.log('Removendo o ultimo elemento:',nomes)//[ 'Wemerson', 'Maria', 'João', 'Eduardo', 'Gabriel']
    console.log(removidos);//[ 'Júlia' ]

    //Ou podemos remover elementos do meio também
    const removidos2 = nomes.slice(1, 3);
    console.log(nomes);
    console.log(removidos2)

//Concatenando arrays:
    let array1 = [1,2,3,4,5,6,7,8,9];

    let array2 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    let arrayJuntado = array1 + array2;

    console.log(typeof(arrayJuntado)) // typeof(arrayJuntado) = String
    console.log(arrayJuntado)//saída: 1,2,3,4,5,6,7,8,9100,200,300,400,500,600,700,800,900

    //A maneira correta de juntar arrays seria o .concat:

    arrayConcatenado = array1.concat(array2);
    console.log(typeof(arrayConcatenado)) //typeof(arrayConcatenado) = object
    console.log(arrayConcatenado)//saída: [1,   2,   3,   4,   5,   6,   7, 8,   9, 100, 200, 300, 400, 500, 600, 700, 800, 900]

//Filtrando arrays: filtra e retorna um array menor ou igual ao original, de acordo com a condição enviada como função dentro de filter.
    let arrayAleatório = new Array();
    
    for(let i=0; i<=8; i++){arrayAleatório.push(rand());}

    console.log(arrayAleatório);

    let arrayDePares = arrayAleatório.filter(n => n%2===0);//Arrow function com retorno booleano

    console.log(arrayDePares)

    let pessoas = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Leticia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47}
    ];

    const pessoas2 = pessoas.filter(pessoa => pessoa.nome.length>= 5);
    console.log(pessoas2)





    
    //Mapeando arrays: Usa um array como base e cria um novo modificando os valores.
    let arrayAleatório2 = new Array();
        
    for(let i=0; i<=8; i++){arrayAleatório2.push(rand());}

    console.log(arrayAleatório2);

    let arrayModificado2 = arrayAleatório2.map(valor => valor*2);

    console.log(arrayModificado2);

    let pessoas3 = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Leticia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wemerson', idade: 22}
    ];
    console.log(pessoas3)
    const pessoasAlterado = pessoas3.map(pessoa => {
        const newPessoa = {...pessoa};//Copia os atributos do objeto original, para não altera-los no original
        newPessoa.id = rand();//Gera id aleatório para o newPessoa sem alterar o objeto original
        
        return newPessoa;
    });
    console.log(pessoasAlterado)
    
//Reduzir um array: Usado para quando queremos reduzir o valor do array, ou comprimir.
    
    let numeros = new Array();
    for(let i = 0; i<=10; i++){numeros.push(rand(0, 20))}

    //.reduce((acumulador, valor, indice, array), valorInicialDoAcumulador)
    let valorTotal = numeros.reduce((acumulador, valor) => acumulador +=valor);
    console.log(valorTotal)

    let pessoasX = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Leticia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wemerson', idade: 22}
    ];

    //                                                                  condição                true    : false
    let pessoaMaisVelha = pessoasX.reduce((acumulador, valor) => acumulador.idade>valor.idade? acumulador:valor);
    console.log(pessoaMaisVelha)

    function rand(min = 0, max = 100000){//Só para aleatorizar os valores do array!!!!!
        const num = Math.random() * (max-min) + min;
    8
        return Math.ceil(num);
    }