import { Router} from "express";
import * as taskController from "../controller/taskControllers";

const router = Router()

/*Criação de tarefas*/

router.post('/task',taskController.taskCreate)

/* Vizualizar tarefas pendentes*/

router.get("/taskPending", taskController.taskPending)

/* vizualizar tarefas completas */

router.get('/taskCompleted', taskController.taskCompleted)

/* Deletar Tarefa */

router.delete('/task/:taskId',taskController.taskDelete)


/* Concluir Tarefa */

router.put('/taskCompleted/:taskId', taskController.taskConfirm)





export default router