import { Router } from 'express';
import { EventController } from '@/controllers/event.controller';

export class EventRouter{
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEvents);
  }

  getRouter(): Router {
    return this.router;
  }
}