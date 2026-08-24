let tarefas = []

function adicionarTarefa() {
      // recebe o valor do input do usuário
       const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim() //.trim() retira espaços em branco
      
      const mensagem = document.getElementById("mensagem") 


      if (tarefa == "") {

          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent = mensagemErro; 
          //mensagem.style.color = #A34743;
      
      } else {
        
          let mensagemSucesso = "Tarefa adicionada com sucesso!";
          let inputTarefa = document.getElementById("inputTarefa")
          let tarefa = inputTarefa.value
          mensagem.textContent = mensagemSucesso;
          tarefas.push(tarefa)
          renderizarTarefas()
      }

        inputTarefa.value = ""
}

function renderizarTarefas() {
      const listaTarefas = document.getElementById("listaTarefas")
      listaTarefas.innerHTML = ""      

      // let i = 0 - iterador
      for (let i = 0; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li")
            
            novaTarefa.textContent = tarefas[i]


            let botaoRemover = document.createElement("button") //criar botao para cada tarefa 
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover Tarefa"
            botaoRemover.onclick = () => removerTarefa(i) // function() {   removerTrefa()  } // Arrow function


            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent= "Editar Tarefa"
            botaoEditar.onclick = () => editarTarefa(i)
            
            novaTarefa.appendChild(botaoRemover) // novaTarefa é o elemento "li"
            novaTarefa.appendChild(botaoEditar)
            listaTarefas.appendChild(novaTarefa)
            

            function removerTarefa(i) {
                  tarefas.splice(i, 1) // 1 - quantos itens deleta a partir do índice
                  renderizarTarefas()
                  const mensagem = document.getElementById("mensagem")
                  mensagem.textContent = "Tarefa removida com sucesso!"
                  
            }
      
            function editarTarefa(i) {
                  let tarefaEditada = prompt("Edite a tarefa:")
                  if (tarefaEditada.trim !== "") {
                      tarefas[i] = tarefaEditada
                      renderizarTarefas()  
                      const mensagem = document.getElementById("mensagem")
                      mensagem.textContent = "Tarefa editada com sucesso!"
                  }

            }
      }

if (tarefas.length>=1) {
            let botaoLimparLista=document.createElement("button")
            botaoLimparLista.className = "botao_lista"
            botaoLimparLista.textContent = "Limpar Lista"
            botaoLimparLista.onclick = () => limparLista()
            listaTarefas.append(botaoLimparLista)

} 

function limparLista() {
      tarefas.length = 0
      renderizarTarefas()
      const mensagem = document.getElementById("mensagem")
      mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}
}
