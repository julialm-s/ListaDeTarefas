function adicionarTarefa() {

      // recebe o valor do input do usuário
      const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim() //.trim() retira espaços em branco
      
      const mensagem = document.getElementById("mensagem") 


      if (tarefa == "") {

          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent = mensagemErro; 
          mensagem.style.color = #A34743;
      
      } else {
        
          let mensagemSucesso = "Tarefa adicionada com sucesso!";
          let inputTarefa = document.getElementById("inputTarefa")

          let tarefa = inputTarefa.value
          mensagem.textContent = mensagemSucesso;

          const listaTarefas = document.getElementById("listaTarefas")
          let novaTarefa = document.createElement("li")
   

          novaTarefa.textContent = tarefa

          listaTarefas.appendChild(novaTarefa)
      }

        inputTarefa.value = ""
}