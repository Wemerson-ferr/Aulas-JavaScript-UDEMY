const nome = 'Wemerson';
const obj = {nome};
const novoObj = {...obj}

console.log(novoObj)

//Geralmente não usamos ele diretamente assim, usamos ele através de general bundler como o webpack, veja na pasta SobreWEBPACK.

//npm install --save-dev @babel/cli @babel/preset-env @babel/core -> Para instalar o babel no node.


//Digitando no terminal: npx babel main.js -o bundle.js --presets=@babel/env -> é criado um novo arquivo chamado bundle, onde é escrito o código acima no JS antigo, para funcionar
// em outros navegadores antigos.