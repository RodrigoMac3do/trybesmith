import { Router } from 'express';
import { UsersController } from '../controllers';

const router = Router();

const usersController = new UsersController();

router.post('/', usersController.create.bind(usersController));

export default router;
