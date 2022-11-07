import { Router } from 'express';
import ProductsController from '../controllers/index';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsController.create.bind(productsController));

export default router;
