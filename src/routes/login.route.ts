import { Router } from 'express';
import { LoginController } from '../controllers';
import { username, password } from '../middlewares';

const router = Router();

const controller = new LoginController();

router.post('/', username, password, controller.verify.bind(controller));

export default router;
