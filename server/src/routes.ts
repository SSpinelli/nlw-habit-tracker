import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";
import dayjs from "dayjs"

export async function appRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const habits = await prisma.habit.findMany()

    return habits
  })

  app.post('/habits', async (req, res) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6))
    })

    const { title, weekDays } = createHabitBody.parse(req.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekday) => {
            return {
              week_day: weekday,
            }
          })
        }
      }
    })
  })

  app.get("/day", async (req) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(req.query)

    const parsedDate = dayjs(date).startOf('day')
    const weekday = parsedDate.get('day')

    console.log(date, weekday)

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date, // lte = less the element
        },
        weekDays: {
          some: {
            week_day: weekday
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map((habit) => {
      return habit.habit_id
    })

    return {
      possibleHabits,
      completedHabits
    }
  })

  // app.patch("/day", async (req, res) => {

  // })
}