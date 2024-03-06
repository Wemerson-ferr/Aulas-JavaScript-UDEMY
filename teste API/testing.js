const enderecoURL = 'https://meu-app-test-4cbc9c4b1ed3.herokuapp.com/users';

/*fetch(enderecoURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição.');
    }
    return response.json();
  })
  .then(data => {
    // Manipular os dados recebidos da API
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });*/

async function getUsuario(){//Mesma função que acima, porem agora com async, veja como é mais limpa
  try{
    let response = await fetch(enderecoURL);

    if(!response.ok) throw new Error('Erro ao fazer a requisição')

    objUsuario = response.json();

    return objUsuario;
  }
  catch(e){
    console.log(e)
  };
}

async function main() {
  const usuarios = await getUsuario();
  console.log(usuarios);
}

main();