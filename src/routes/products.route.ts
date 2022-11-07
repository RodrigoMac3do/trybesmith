import { Router } from 'express';
import ProductsController from '../controllers/index';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll.bind(productsController));

router.post('/', productsController.create.bind(productsController));

export default router;
