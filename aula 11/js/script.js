/*let num = Number(prompt('Escolha um número:'))

let res = document.getElementById("res")

res.innerHTML = `
    <h1>Seu número é ${num}</h1>
    <p>A raiz quadrade: ${Math.sqrt(num)}</p>
    <p>${num} é inteiro? -> ${Number.isInteger(num)}</p>
    <p>${num} é NaN? -> ${Number.isNaN(num)}</p>
    <p>Arrendondado para baixo: ${Math.floor(num)}</p>
    <p>Arrendondado para baixo: ${Math.ceil(num)}</p>
    <p>Com duas casas decimais: ${num.toFixed(2)}</p>`;


*/
function soma(num1 = 0, num2 = 0){
    let soma = num1+num2;

    return soma;
}

let resultado = soma(5, 4);


let result = (num1, num2) => (num1 + num2);

console.log(`${result(100, 300)}`)

const data = new Date();

console.log(data.toString());