const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso')//Pega o input por completo
    const inputAltura = e.target.querySelector('#altura')//Pega o input por completo

    const peso = Number(inputPeso.value);// Pega o valor inserido no imput
    const altura = Number(inputAltura.value);// Pega o valor inserido no imput

    if(!peso){
        setResultado('Peso inválido!', false)
        return
    }
    if(!altura){
        setResultado('Altura inválida', false)
        return
    }
    const IMC = calculaIMC(peso, altura);
    setResultado(`Seu imc é ${IMC}, logo ${getValores(calculaIMC(peso, altura))}`, true);
    
})

function getValores(imc){
    const valores = ['Baixo peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return valores[5];
    }
    if(imc >= 34.9){
        return valores[4];
    }
    if(imc >= 29.9){
        return valores[3];
    }
    if(imc >= 24.9){
        return valores[2];
    }
    if(imc >= 18.5){
        return valores[1];
    }
    if(imc < 18.5){
        return valores[0];
    }
}

function calculaIMC(peso, altura){
    return (peso / altura**2).toFixed(2);
}

function criaParagrafo(){
    return document.createElement('p');// Cria um elemento de paragrafo
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();
    if(isValid){
        p.classList.add('resultado-valido')
    }
    else{
        p.classList.add('resultado-invalido')
    }
    resultado.appendChild(p);
    p.innerHTML = `${msg}`;

    
}