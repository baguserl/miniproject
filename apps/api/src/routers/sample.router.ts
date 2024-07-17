import { AuthController } from '@/controllers/auth.controller';
import { Router } from 'express';

export class SampleRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.authController.getUsers);
    this.router.get('/:id', this.authController.getUsers);
    this.router.post('/register', this.authController.registerUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
