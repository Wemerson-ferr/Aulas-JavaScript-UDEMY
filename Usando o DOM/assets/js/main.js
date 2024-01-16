const valores = [
    { tag: 'p', texto: 'Qualquer coisa escrita aqui, blabla bla blablabla' },
    { tag: 'div', texto: 'Qualquer coisa escrita aqui, blabla bla blablabla' },
    { tag: 'section', texto: 'Qualquer coisa escrita aqui, blabla bla blablabla' },
    { tag: 'footer', texto: 'Qualquer coisa escrita aqui, blabla bla blablabla' }
];

let container = document.querySelector('.container');
const div = document.createElement('div')


for(let i=0; i<valores.length;i++){
   let {tag, texto} = valores[i];
   let tagCriada = document.createElement(tag);
   let textoCriado = document.createTextNode(texto);

   tagCriada.appendChild(textoCriado);
   div.appendChild(tagCriada);

}
container.appendChild(div)
