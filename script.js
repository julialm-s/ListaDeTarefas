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
          renderizartarefas()
      }

        inputTarefa.value = ""
}

function renderizartarefas() {
      const listaTarefas = document.getElementById("listaTarefas")
      listaTarefas.innerHTML = ""      

      let i = 0 //iterador
      for (i; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefas[i]
            listaTarefas.appendChild(novaTarefa)
      }

}
