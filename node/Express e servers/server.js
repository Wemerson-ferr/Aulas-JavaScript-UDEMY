//Para rodar o server, usar node ./server.js
//Após finalizar o teste, finalize, se abriu pelo terminal feche com Ctrl + C.
// Se tiver instalado no nodemon como dependência Dev, use npx nodemon ./server.js, um crie um script no package.json

const express = require('express');
const app = express();


//                  CRIAR, LER,  ATUALIZAR, DELETAR
//Operações CRUD -> CREATE, READ, UPDATE, DELETE
//Métodos            POST,  GET,   PUT,   DELETE


// Nas funções, precisamos definir rotas da URL, no caso abaixo, temos a rota raiz de um site fictício definido como '/'
// Nas URL's temos: www.meusite.com{ /ROTA }{ /PARÂMETRO(opcional) }{ /?QUERY(opcional) }
app.get('/', (req, res) => {
    //Não é costume enviar HTML bruto, isso é apenas demonstração
    const form = `
    <form action="/" method="POST">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="">
        <button>Enviar</button>
    </form>
    `;
    res.send(form);
});


// Para habilitar o recebimento de parâmetros na rota, devemos colocar /rota/:nomeDoParâmetro escolhido. Os ':' são obrigatórios. E ao colocar o '?' no final dizemos que o parâmetro é opcional
app.get('/teste/:parametro?', (req, res) => {
    //Dentro de res, temos o objeto params e ele constem tudo que é enviado como parâmetro na URL
    console.log(req.params)

    //Observe que nesse caso aqui, enviados o parâmetro chamado parâmetro e ele é salvo como uma chave dentro do objeto params.
    res.send(`Seu parâmetro enviado é ${req.params.parametro}, sua query emviada é ${req.query.minhaquery}`)
//Saída: http://127.0.0.1:3000/teste/MeuParametro/?minhaquery=ol%C3%A1 -> Seu parâmetro enviado é MeuParametro, sua query emviada é olá

    //Temos também o objeto req.query, que recebe as query strings que forma enviadas no navegador. Lembre-se que na URL, query strings começam com '?' (/rota/?minhaquery=teste)
    // Veja também que query são chave=valor; Para adicionar mais, usamos o &, exemplo: (/rota/?minhaquery=teste&outraquery=outroValor)


})

//Para liberar o uso do req.body devemo indicar no express, usando a função com os parâmetros abaixo:(geralmente é colocada no incio do documento...)
app.use(express.urlencoded({extended:true}))

app.post('/', (req, res) => {
    //O nome da chave usado vem do text input form enviado no primeiro get lá em cima, por isso é importante tomar cuidado com esse campo no HTML
    res.send(`O corpo da requisição é ${req.body.nome}`);
})

app.listen(3000);