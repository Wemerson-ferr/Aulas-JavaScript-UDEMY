function animal(nome = '', fala = ''){
    return {
        nome,
        fala,

        falar(){
            console.log(`${this.nome} diz: "${this.fala}"`)
        }
    }
}

const animais = [];

animais.push(animal("Gato", "miau"));
animais.push(animal("Cachorro", "au au"));
animais.push(animal("Galinha", "cocoricó"));

console.log(animais)

animais.forEach(animal => animal.falar());
