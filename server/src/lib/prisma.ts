import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"],
}); // Já da acesso ao banco de dados.
