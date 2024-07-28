import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()
export class EventController{
    async getEvents(req: Request, res: Response) {
        try {
            const data = await prisma.event.findMany();

            return res.status(200).send({
                message: "success",
                data
            })
        } catch (err) {
          console.error(err);
          return res.status(500).send({
            error: JSON.stringify(err)
          });
        }
    }
}