import { Request, Response } from 'express'
import {v4} from 'uuid'

type Task = {
    id: any;
    student:string,
    description: string
    state:"Pendente"|"Concluido"
   
}

let task:Task[] = []

let taskComplet:Task[] = []



export const taskCreate = (req: Request, res: Response) => {
    const student = req.body.student as string
    const description = req.body.description as string
    const id  = v4() 

    if(student === '' || description === '') {
    res.status(400).json({mensage: 'Erro ao cadastrar tarefa por favor preencha todos os campos'})
    } else {
        task.push({id, student,description,state:"Pendente"})

        res.status(201).json({mensage: 'Sucesso ao registrar a tarefa', task})
    }  

}

export const taskPending = (req:Request, res:Response) => {
    task.length === 0 ? res.status(200).json({ message:"Sem Tarefas Pendentes"}) : 
    res.status(200).json(task)
    
}


export const taskCompleted = (req: Request, res: Response) => {
    taskComplet.length === 0 ? res.status(200).json({ message:"Sem Tarefas Completadas"}) : 
    res.status(200).json(taskComplet)
    
}

export const taskDelete = (req: Request, res: Response) => {
    const task_id = req.params.taskId

    const index = task.findIndex( u => u.id === task_id)

    task.splice(index,1)
    
    res.status(200).json({ message:"Tarefa Removida com sucesso", task});

}


export const taskConfirm = (req: Request, res: Response) => {
    const task_id = req.params.taskId
    const index = task.findIndex( u => u.id === task_id)

    taskComplet.push(task[index])
    task.splice(index,1)
    
    res.status(200).json({ message:"Tarefa Concluida com sucesso", taskComplet});
}