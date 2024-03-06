const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'})//flag: 'w' indica que o arquivo será reescrito caso já exista.
}