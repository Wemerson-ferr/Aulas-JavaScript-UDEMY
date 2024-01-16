function data(){
    return {
        dataCompleta: new Date(),
        diaSemana: getDiaSemana(dataCompleta)}
    
    function getDiaSemana(dataAlvo = Date){
        const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        
        let numDia = dataAlvo.getDay();
        console.log(dias[numDia])
        return dias[numDia];
    }
}

let minhaData = data();

console.log('3',minhaData.diaSemana);