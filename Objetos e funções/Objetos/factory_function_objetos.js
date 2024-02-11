/**Factory function são funções que criam objetos, eles permitem uma versatilidade e reuso do código, por exemplo:*/
function criaPessoa(nome, sobrenome, altura, peso){
    //importante salientar que, embora os parâmetros e atrbutos tenham o mesmo nome e recebem os mesmos valores automaticamente, eles são variáveis diferentes. Portanto se mudar o atributo por exemplo, o argumento continua o mesmo. Então para garantir que esteja pegando o valor do atributo, sempre use o this.nomeAtributp.
    return {
        nome,
        sobrenome,
        altura,
        peso,
        argumentos: arguments,

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        get imc() {// usando o get, a função começa a se passar como um atributo do objeto e pode ser chamada nomeObjeto.imc 
            const indice = (this.peso/ (altura * altura));
            return indice.toFixed(2);
        },

        fala(falar){
            return `${this.nome} diz: ${falar}`
        },

        get getArgumentos(){
            console.log(this.argumentos);
        }
    }
}

let p1 = criaPessoa('Wemerson', 'Ferreira', 174, 110);
console.log(p1.getArgumentos);//[Arguments] { '0': 'Wemerson', '1': 'Ferreira', '2': 174, '3': 110 }
console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Luiz Antonio Joares Silva'
console.log(p1.nomeCompleto);

console.log(p1.getArgumentos);//[Arguments] { '0': 'Wemerson', '1': 'Ferreira', '2': 174, '3': 110 } //Perceba que não muda!