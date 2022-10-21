const useLocalStorage = () : Todo[] => {

    const json = localStorage.getItem("todos");
    if(!json){
        return []
    }
    const todos: Todo[] = JSON.parse(json)

    return todos
}

export default useLocalStorage