import { Router } from 'express';
import { OrdersController } from '../controllers/index';

const router = Router();

const controller = new OrdersController();

router.get('/', controller.getAll.bind(controller));

export default router;
