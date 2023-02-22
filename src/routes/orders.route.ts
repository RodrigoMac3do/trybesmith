import { Router } from 'express';
import { OrdersController } from '../controllers/index';

const router = Router();

const controller = new OrdersController();

router.get('/', controller.findAll.bind(controller));

router.post('/', controller.create.bind(controller));

export default router;
