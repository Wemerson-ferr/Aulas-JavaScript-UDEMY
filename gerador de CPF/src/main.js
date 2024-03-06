import 'core-js/stable';//Para resolver problemas de compatibilidade com algumas funções nos navegadores muito antigos, como assync, promisses, etc.
import 'regenerator-runtime/runtime'; //Para resolver problemas de compatibilidade com algumas funções nos navegadores, como assync, promisses, etc.

import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const cpfGerado = document.querySelector('.cpf-gerado');
    const gerador = new GeraCPF();

    cpfGerado.innerHTML = gerador.geraNovoCPF();
})();