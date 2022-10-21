type Todo = {
    name: string
    id: number
    complete: boolean
}

type Todos = {
    todos: Todo[]
    deleteTodo: DeleteTodo
    setComplete: SetComplete
}

type AddTodo = (todo: Todo) => void
type DeleteTodo = (id: number) => void
type SetComplete = (id: number) => void