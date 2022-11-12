import { Router } from 'express';
import { UsersController } from '../controllers';

const router = Router();

const controller = new UsersController();

router.post('/', controller.create.bind(controller));

export default router;
