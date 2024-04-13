<script lang="ts">
  import TodoItem from "./TodoItem.svelte";

  import { tasks } from "../store"

    let task: string = ''
    // let tasks: string[] = []

    const addTask = () => {
        if (task) {
            // tasks = [...tasks, task]
            // Agora o tasks é um observable, aí muda um pouco a forma de se fazer as coisas
            tasks.update(() => [...$tasks, task])
            task = ''
        }
    }
</script>

<h1>Todo</h1>

<form class="form" on:submit|preventDefault={addTask}>
    <input bind:value={task} class="form__field" type="text" placeholder="Add a new todo" />
    <button class="form__button" type="submit">Add</button>
</form>

<!-- Podemos usar o $ para falar para a aplicação fazer um subscription, o $ já faz isso implicitamente, então não precisamos fazer isso manualmente. -->
<TodoItem list={$tasks} />

<style>
    .form__field {
        border: 1px solid #dcdcdc;
        border-radius: 50px;
        color: #333333;
        font-family: ARial, sans-serif;
        font-size: 2rem;
        padding: 1rem 2rem;
        margin-right: .5rem;
        vertical-align: middle;
    }

    .form__button {
        background-color: #00cc99;
        border: none;;
        border-radius: 10px;
        color: #ffffff;
        display: inline-block;
        font-family: Arial, sans-serif;
        padding: 1rem;
        vertical-align: middle;
    }

    .form__button:focus {
        outline: none;
    }

    .form__button:hover {
        cursor: pointer;
    }
</style>