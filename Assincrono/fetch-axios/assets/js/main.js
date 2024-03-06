fetch('https://meu-app-test-4cbc9c4b1ed3.herokuapp.com/users')//desative o CORS do navegador ou coloque um cors na API
  .then(resposta => resposta.json())
  .then(json => {carregaElementosNaPagina(json)
    console.log(json)
  })
  .catch(e => console.log(e));

/*axios('https://meu-app-test-4cbc9c4b1ed3.herokuapp.com/users')
   .then(resposta => carregaElementosNaPagina(resposta.data));*/

function carregaElementosNaPagina(json) {
  console.log(json)
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
