import express, { Router, Request, Response, NextFunction } from 'express'
import TodoModel from '../models'
import Todos from '../models/TodoModel'

const todos : Router = express.Router()

todos.get('/', (req: Request, res: Response, next: NextFunction) => {
    Todos.find({})
        .sort({ updatedAt: -1 })
        .exec()
        .then(todos => {
            res.json(todos)
        })
})

todos.post('/add', (req: Request, res: Response, next: NextFunction) => {

    const { id, name, complete } = req.body

    const newTodo = new Todos<TodoModel>({
        name,
        id,
        complete
    });

    console.log(req.body)

    try {
        newTodo.save()
        res.send("added");
    } catch (error: Response) {
        res.send(error)   
    }
})

todos.delete('/del/:id', async (req: Request, res: Response, next: NextFunction) => {
    const idToDelete : number = req.params.id

    try {

        await Todos.findOneAndDelete({ id: idToDelete })
        res.send("Deleted");

    } catch (error: Response) {
        res.send(error)
    }
})

todos.put('/update/:id', (req: Request, res: Response, next: NextFunction) => {
    const idToUpdate : number = req.params.id

    Todos.findOne({ id: idToUpdate }, (err, todo)=>{
        if(err) return res.send("Error! "+err)
        todo.complete = !todo.complete
        todo.save((err: Response) => {
            if(err) return res.send(err)
            res.send("Updated");
        })
    })
})

todos.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send("posted")
})

export default todos

