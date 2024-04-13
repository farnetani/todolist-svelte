<script lang="ts">
    export let list: string[] = []
    export let onDelete: (index: number) => void // Função para chamar quando uma tarefa deve ser deletada

    import "./TodoItem.css";

    const handleDelete = (index: number) => {
    onDelete(index);
  };    
</script>

<ul class="list">
    {#each list as task, index}
        <li class="list__item">
            {task}
            <button on:click={() => handleDelete(index)}>Delete</button>
        </li>
    {/each}    
</ul>
