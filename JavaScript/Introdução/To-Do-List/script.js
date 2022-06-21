elemento = document.getElementById('lista-itens');

function pegarTexto(){
    var texto = document.getElementById('campo-texto').value;
    console.log(texto);

    if (texto != ''){
    var caixa = document.createElement('div');
    var tarefa = document.createElement("span");
    var check = document.createElement('input');
    tarefa.appendChild(document.createTextNode(texto));

    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', texto);
    check.setAttribute('id', texto);

    caixa.classList.add('Tarefas')

    caixa.appendChild(check);
    caixa.appendChild(tarefa);

    elemento.appendChild(caixa);
    
    document.getElementById('campo-texto').value = ''
    } 
    
}


