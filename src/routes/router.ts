import { Router } from 'express';
import routes from '.';

const router = Router();

router.use('/products', routes.products);

router.use('/users', routes.users);

router.use('/orders', routes.orders);

router.use('/login', routes.login);

export default router;
