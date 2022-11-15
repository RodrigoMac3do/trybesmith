import { Router } from 'express';
import { LoginController } from '../controllers';

const router = Router();

const controller = new LoginController();

router.post('/', controller.verify.bind(controller));

export default router;
