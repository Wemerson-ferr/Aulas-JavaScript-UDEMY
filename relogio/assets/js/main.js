function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);//Cria uma data nova com os segundos iterados em iniciarRelogio();
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'//Sertifica que o timezone não interfira com os dados, pode ser qualquer data, pois o que importa é a hora.
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);//Sobrescreve o valor com o segundos retornados 
    }, 1000);
  }

  /**
   * Ao invés de criar um eventListener para cada botão, foi criado um genérico para todo o document, e quando um dos botões é
   * clicado o if correspondente é acionado. Isso serve para reduzir o processamento de infomações no navegador e tornar o site   
   * mais eficiente.
   */
  document.addEventListener('click', function(e) {
    const el = e.target;//Retorna o elemento HTML que foi clicado dentro da document.

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio();
