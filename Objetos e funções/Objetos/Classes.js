const _CPF = Symbol('CPF');


class Pessoa {
    //Repare agora que com a classe, não passamos os parÂmetros diretamente, mas sim em uma função constructor.
    constructor(nome, sobrenome, idade, CPF){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this[_CPF] = CPF; //"Cria uma variável privada"
    }

    get CPF(){
        return this.CPF;
    }

    set CPF(numCPF){
        if(ValidaCPF(numCPF)){
            this[_CPF] = numCPF;
        }
    }

    //Os métodos dentro das classes agora, não precisam da palavra function. E Não precisam ser adicionados manualmente no prototype (Já é adicionado automaticamente)
    falar(){
        console.log(`${this.nome} está falando`)
    }

    static souUmaPessoa(){//Métodos estáticos são usados pela classe, não pelo objeto instanciado.
       return 'Sou uma pessoa!!!'
    }
}

class aluno extends Pessoa{
    constructor(nome, sobrenome, idade, CPF, curso){
        super(nome, sobrenome, idade, CPF);//Chama o construtor da classe mãe.
        this.curso = curso;
    }
    falar(){//Sobrescrevendo o método da classe mãe, ou especializando.
        console.log(`${this.nome} está estudando`);
    }


}