<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import { tasks, deleteTask } from "../store"
  import "./Todo.css";

    let task: string = ''
    // let tasks: string[] = []
    let searchTerm: string = ''; // Termo de busca

    const addTask = () => {
        if (task) {
            // tasks = [...tasks, task]
            // Agora o tasks é um observable, aí muda um pouco a forma de se fazer as coisas
            tasks.update(() => [...$tasks, task])
            task = ''
        }
    }

    // Função para filtrar tarefas com base no termo de busca
    $: filteredTasks = $tasks.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

</script>

<h1>Todo</h1>

<input class="search-bar" type="text" bind:value={searchTerm} placeholder="Pesquisar..." />

<form class="form" on:submit|preventDefault={addTask}>
    <input bind:value={task} class="form__field" type="text" placeholder="Adicione uma nova taefa" />
    <button class="form__button" type="submit">Add</button>
</form>

<!-- Podemos usar o $ para falar para a aplicação fazer um subscription, o $ já faz isso implicitamente, então não precisamos fazer isso manualmente. -->
<!-- <TodoItem list={$tasks} onDelete={deleteTask} /> -->
<TodoItem list={filteredTasks} onDelete={deleteTask} />
