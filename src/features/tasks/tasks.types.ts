export interface Task {
    id:number
    title:string
    completed:boolean
}

export interface TasksState {
    items: Task[]
    status : 'idle' | 'loading' |'error'
}