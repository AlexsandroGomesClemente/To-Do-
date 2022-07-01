import express, {Request, Response} from 'express';
import dotenv from 'dotenv'
import mainRoutes from './routes'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());
app.use(mainRoutes)



app.use((req:Request, res:Response)=> {
    res.status(404).json({message: "Endpoint not found!"})
})

app.listen(process.env.PORT, () => console.log('Server listening on port ', process.env.PORT, "✔"));