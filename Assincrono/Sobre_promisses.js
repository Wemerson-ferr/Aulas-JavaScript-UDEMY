function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random()* (max - min) + min);
}

function simulaDemora(mensagem, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof mensagem !== 'string') reject('Conexão falhou');
        setTimeout(()=>{
            //'Acontece algo que não sabemos o tempo que demoraria, exemplo, conectar a um banco de dados, ou realizar uma consulta ao banco'
            resolve(mensagem);
        }, tempo)
    })
}

simulaDemora('Conectando ao banco', rand(1, 4))//Primeira chamada
    .then(resposta => {
        console.log(resposta);
        return simulaDemora('Fazendo um SELECT demorado', rand(2, 5));//Ocorre comente caso a primeira seja bem sucedida
    })
    .then(resposta => {
        console.log(resposta);
        return simulaDemora('Montando informação recebida no front-end', rand(1, 2))//Ocorre comente caso a segunda seja bem sucedida
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(error => {
        console.log('Erro ao conectar: ', error)//Ocorre comente caso qualquer uma das promises seja mau sucedida.
    });

    /**
Métodos de promises

Segue uma explicação abaixo sobre Promise.all e outros métodos de promises.

Promise.all é justamente o que o nome "all" diz, só resolve se todas as promises resolverem. Está pra sair oficialmente o Promise.any (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) mas ainda está no estágio 4 (ainda não é oficial na linguagem). Promise.any resolverá quando apenas uma das promessas resolverem e retornará seu valor.

Também temos Promise.race, que é "uma corrida" de promises... Ou seja, quando a primeira delas resolverem, completa e retorna o valor. Se uma falar, falha todas.

Todos esses métodos dentro de promises, são para arrays de promises... Ou seja, você manda várias promessas e a linguagem faz o que você pedir.

Tem alguns desses métodos que podem ser encontrados em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise (no menu à esqueda).

Estados das promises:
    pending -> quando foi iniciada mas ainda não obteve retorno.

    fulfilled -> quando já retornou com os valores requisitados (cumpriu seu objetivo)

    rejected -> Quando houve algum erro durante sua execução.

     */