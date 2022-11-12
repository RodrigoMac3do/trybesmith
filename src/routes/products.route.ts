import { Router } from 'express';
import { ProductsController } from '../controllers/index';

const router = Router();

const controller = new ProductsController();

router.get('/', controller.getAll.bind(controller));

router.post('/', controller.create.bind(controller));

export default router;
