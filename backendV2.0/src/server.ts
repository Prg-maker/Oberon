import express from 'express'
import { router } from './routes'
import cors from 'cors' 

const server = express()

server.use(cors({
  origin:"*"
}))
server.use(express.json())
server.use(router)


server.listen(3001, ()=> console.log('server is running'))