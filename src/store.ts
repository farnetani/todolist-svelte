import { writable } from 'svelte/store'

const tasks = writable<string[]>([])

// Função para remover uma tarefa
export function deleteTask(taskIndex: number) {
    tasks.update(currentTasks => {
        return currentTasks.filter((_, index) => index !== taskIndex);
    });
}

export {tasks}