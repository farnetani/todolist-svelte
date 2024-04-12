<script lang="ts">
    export let list: string[] = []
</script>

<ul class="list">
    {#each list as item}
        <li class="list__item">{item}</li>
    {/each}    
</ul>

<style>
    .list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .list__item {
        background-color: #f9f9f9;
        border-radius: 10px;
        color: #333333;
        font-family: Arial, sans-serif;
        font-size: 2rem;
        margin-bottom: 1rem;
        padding: 1rem;
    }
</style>
