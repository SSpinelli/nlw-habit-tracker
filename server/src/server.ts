// Back-end API RESTful
import Fastify from "fastify"
import cors from "@fastify/cors"
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient() // Já da acesso ao banco de dados.

app.register(cors, {
    origin: "http://localhost:3333"
}) // Configuração para o Frontend vai poder acessar o Backend.


app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: "Beber",
            }
        }
    })
    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server running!")
})