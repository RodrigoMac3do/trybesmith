import express from 'express';
import 'express-async-errors';
import { productsRoute, usersRoute, ordersRoute, loginRoute } from './routes/index';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', usersRoute);

app.use('/orders', ordersRoute);

app.use('/login', loginRoute);

app.use(httpErrorMiddleware);

export default app;
