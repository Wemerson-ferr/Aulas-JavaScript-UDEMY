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

async function simulaDemoraComAsync(){//Usamos o modificador async na função para torna-la assíncrona
    try{
        const fase1 = await simulaDemora('Conectando ao banco', rand(1, 4)); //Usamos o modificador await para informar que deverá esperar a execução desta função para seguir em frente.
        console.log(fase1);

        const fase2 = await simulaDemora('Fazendo um SELECT demorado', rand(2, 5));//Usamos o modificador await para informar que deverá esperar a execução desta função para seguir em frente.
        console.log(fase2);

        const fase3 = await simulaDemora('Montando informação recebida no front-end', rand(1, 2));//Usamos o modificador await para informar que deverá esperar a execução desta função para seguir em frente.
        console.log(fase3);
    }
    catch(e){
        console.log(e)
    }
}

simulaDemoraComAsync();

console.log('Executando fora da async')//Aparece primeiro que as funções async, mesmo estando depois delas.