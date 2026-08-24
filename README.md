# 📝 Lista de Tarefas

Aplicação web simples para gerenciamento de tarefas (*To-Do List*), desenvolvida com **HTML**, **CSS** e **JavaScript puro**. Permite adicionar, editar, remover e limpar tarefas de forma rápida e intuitiva, com feedback visual para o usuário.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Funcionalidades

- ✅ Adicionar uma nova tarefa
- 🚫 Impedir o cadastro de tarefas vazias
- 📃 Exibir as tarefas adicionadas pelo usuário
- ✏️ Editar uma tarefa existente
- 🗑️ Remover uma tarefa individualmente
- 🧹 Limpar todas as tarefas da lista
- 👁️ Exibir o botão **"Limpar Lista"** somente quando houver pelo menos uma tarefa cadastrada
- 💬 Exibir mensagens de sucesso ou erro para o usuário

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Função |
|---|---|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização dos elementos |
| **JavaScript** | Lógica e interação com o usuário |

---

## 📁 Estrutura do projeto

```text
lista-de-tarefas/
│
├── index.html      # Estrutura da página
├── style.css       # Estilização da aplicação
├── script.js       # Lógica da aplicação
└── README.md       # Documentação do projeto
```

### `index.html`
Contém a estrutura da página, incluindo:
- Campo para inserir uma tarefa;
- Botão para adicionar a tarefa;
- Área onde as tarefas são exibidas;
- Área destinada às mensagens do sistema.

### `style.css`
Responsável pela aparência da aplicação: cores, fontes, espaçamentos e estilos dos botões e da lista.

### `script.js`
Contém a lógica da aplicação, incluindo as funções para:
- Adicionar tarefas;
- Renderizar a lista;
- Editar tarefas;
- Remover tarefas;
- Limpar a lista.

---

## ▶️ Como executar

1. Faça o download ou clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/lista-de-tarefas.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. A aplicação estará pronta para uso.

> 💡 Também é possível utilizar uma extensão como **Live Server** (Visual Studio Code) para executar o projeto localmente com recarregamento automático.

---

## 💡 Como utilizar

### Adicionar uma tarefa
Digite uma tarefa no campo de texto e clique no botão de adicionar.
Caso o campo esteja vazio, uma mensagem de erro será exibida.

### Editar uma tarefa
Clique no botão **"Editar Tarefa"** correspondente à tarefa que deseja alterar e informe o novo texto.

### Remover uma tarefa
Clique no botão **"Remover Tarefa"** correspondente à tarefa desejada.

### Limpar a lista
O botão **"Limpar Lista"** é exibido somente quando existe pelo menos uma tarefa cadastrada. Ao clicar nele, todas as tarefas são removidas.

---

## 📌 Observações

As tarefas são armazenadas em um **array JavaScript** durante a execução da aplicação. Portanto, os dados **não são persistidos** após o fechamento ou atualização da página.

---

## 🎯 Objetivo do projeto

O projeto tem como objetivo praticar conceitos básicos de desenvolvimento web, principalmente:

- Manipulação do DOM;
- Eventos em JavaScript;
- Arrays;
- Funções;
- Estruturas condicionais;
- Estruturas de repetição;
- Criação e manipulação de elementos HTML utilizando JavaScript.
