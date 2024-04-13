import { writable } from 'svelte/store'

const tasks = writable<string[]>([])

export {tasks}