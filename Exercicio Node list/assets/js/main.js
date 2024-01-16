const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const colorWhite = '#fff'

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = colorWhite
}