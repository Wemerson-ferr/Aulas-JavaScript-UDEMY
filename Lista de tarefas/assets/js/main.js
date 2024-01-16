const form = document.querySelector('#form')
const tarefas = document.querySelector('.tarefas')
let listaDesordenada = document.createElement('ul');
listaDesordenada.classList.add('ListaTarefas')

let tarefa = document.querySelector('#inputTask')

document.addEventListener('click', function(e){
    e.preventDefault();
    
    if(e.target.classList.contains('CriarTarefa'))
        adicionaTarefa(tarefa.value);

    if(e.target.classList.contains('RemoverTarefa')){
        removeTarefa(e.target.parentElement);
    }
})

function adicionaTarefa(terafaAdicional){
    if(listaDesordenada.length = 0){
        criaListagem();
    }
    let texto = document.createTextNode(terafaAdicional);
    let itemLista = document.createElement('li');

    itemLista.appendChild(texto);
    listaDesordenada.appendChild(itemLista);
    let botaoExcluirTarefa = document.createElement('button');
    botaoExcluirTarefa.textContent = 'Excluir';
    botaoExcluirTarefa.classList.add('RemoverTarefa');
    botaoExcluirTarefa.setAttribute("type", "submit")
    itemLista.appendChild(botaoExcluirTarefa);

    tarefas.appendChild(listaDesordenada);
    limpaInput();
}

function limpaInput(){
    tarefa.value = '';
    tarefa.focus();
}

function removeTarefa(objetoAlvo){
    let listagem = document.querySelector('.ListaTarefas')
    console.log(objetoAlvo)
    listagem.removeChild(objetoAlvo);
}