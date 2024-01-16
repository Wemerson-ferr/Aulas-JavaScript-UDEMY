/** Em javaScript a função pode ou não ter parâmetro sem alterar o funcionamento desta função. Todos os argumentos são armazenados dentro de um objeto chamado arguments*/

function seila(){
    console.log(arguments);
} 

seila('Wemerson', 'Ferreira', 'Brito');//Saída: [Arguments] { '0': 'Wemerson', '1': 'Ferreira', '2': 'Brito' };


/**Podemos usar um operador rest(...) para armazenar os parâmetros extras que são enviados para uma função: */
function calcula(valor1, valor2, valor3, valor4, ...resto){
    console.log(`Os valores de 1 a 4: ${valor1},${valor2},${valor3},${valor4}`);
    console.log(`O resto: ${resto}`);
}//Observação, na arrow function '=>' não existe o arguments, então podemos usar o ...resto para capturar os argumentos enviados.

calcula(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Wemerson');

//Sobre os retornos das funções, podemos retornar basicamente qualquer coisa no javaScrip. E quando não informado, o retorno padrão é undefined. Por exemplo, uma função que retorna outra função:

function criaMultiplicador(multiplicador){
    //A variável multiplicador está nesse escopo 
    
    return function(n){
        //A variável n está no escopo destra função anonima.
        return n * multiplicador;//Consegue acessar o multiplicador por ser vizinho dela.
    }
}

const duplica = criaMultiplicador(2);
let valorDuplicado = duplica(5); //Saída '10', pois criei a primeira função com o valor do multiplicador por 2.
 