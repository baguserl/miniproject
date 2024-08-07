import { AuthController } from '@/controllers/auth.controller';
import { verifyToken } from '@/middlewares/jwt.middleware';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.authController.getUsers);
    this.router.get('/me', verifyToken, this.authController.myProfile);
    this.router.post('/register', this.authController.registerUser);
    this.router.post('/login', this.authController.loginUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
