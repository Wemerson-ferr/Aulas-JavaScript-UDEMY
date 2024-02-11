//Uma função construtora serve para criar objetos também, assim como na factory function. Porém objetos criados por uma construtora precisam ser iniciados com o new NomeObjeto(). Exemplo:

function Pessoa(nome, sobrenome){
    //Podemos ter também atributos e metodos privados, ao cria-los com const.
    const ID = 123456
    const metodoPrivato = () => {
        //exemplo de método privado
    }
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodoQualquer = function (){
        console.log('Metodo qualquer.....')
    };

    /*                   objetoAlvo, 'nomePropriedade', ConfigObject                  
    Object.defineProperty(this, 'nome', {//Define apenas uma propriedade, a passada no parâmetros.
        //value: nome,//Define o valor da propriedade
        enumerable: true,// Diz se aparece ou não na enumeração, impressão.
        writable: false,//Define se a propriedade pode ser editada por sinal de atribuição (objeto.propriedade = qualquerCoisa)
        configurable: true,//Previne edição, deleção, alteração.
        /*set: function(valor){
            //Aqui podemos aplicar uma lógica ou restrição para inserção de valores no atributo, por exemplo somente números para idade e altura.

        },
        get: function(){
            //Aqui retornamos o valor do atributo
            return nome;
        }
    }); */
    

    /*ObjetoAlvo, objeto onde cada chave é um objeto com atributos com suas configurações. Serve para editar mais de um atributo ao mesmo tempo.
    Object.defineProperties(this, {

        nome:{//Edita o atributo nome DESTE objeto.
            value: nome,//Define o valor da propriedade
            enumerable: true,// Diz se aparece ou não na enumeração, impressão.
            writable: true,//Define se a propriedade pode ser editada por sinal de atribuição (objeto.propriedade = qualquerCoisa)
            configurable: true,//Previne edição, deleção, alteração.
            set: function(valor){
                //Aqui podemos aplicar uma lógica ou restrição para inserção de valores no atributo, por exemplo somente números para idade e altura.
    
            },
            get: function(){
                //Aqui retornamos o valor do atributo
                return nome;
            }
        },

        sobrenome:{//Edita o atributo sobrenome DESTE objeto.
            value: sobrenome,//Define o valor da propriedade
            enumerable: true,// Diz se aparece ou não na enumeração, impressão.
            writable: true,//Define se a propriedade pode ser editada por sinal de atribuição (objeto.propriedade = qualquerCoisa)
            configurable: true,//Previne edição, deleção, alteração.
            set: function(valor){
                //Aqui podemos aplicar uma lógica ou restrição para inserção de valores no atributo, por exemplo somente números para idade e altura.
    
            },
            get: function(){
                //Aqui retornamos o valor do atributo
                return nome;
            }
        }
    })*/

}

const p1 = new Pessoa('Wemerson', 'Ferreira'); //Iniciado com o new
//Como podemos modificar os valores dos atributos com nomeObjeto.nomeAtributo = qualquerCoisa, temos a opção de bloquear o objeto para modificação
//Usando o Object.freeze(nomeObjeto), ou dentro do objeto colocar o Object.freeze(this) que congela para sempre o objeto.

//Prototype, se pararmos para observar os objetos acima, percebemos que todos terão métodos em comum, oque gera um peso para processamento. Todas as pessoas tem o mesmo método. Para resolver isso, o JavaScript tem o prototype, que é como se fosse o pai dos objetos criados.

//Por exemplo, se eu criar um protótipo de pessoa, com o método fala, todas as instancias dele terão esse mesmo método. Por mais que na função de construção original ele não exista. 

Pessoa.prototype.fala = function(){
    return `${this.nome} diz: Olá`;
}

let novaPessoa = new Pessoa('Wemerson', 'Ferreira');
console.log(novaPessoa.fala()); //Wemerson diz: Olá //Use console.dir() no navegador e veja Object -> Pessoa.prototype -> Pessoa -> Instancia de pessoa.

console.dir()