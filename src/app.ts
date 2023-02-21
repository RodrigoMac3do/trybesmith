import express from 'express';
import 'express-async-errors';
import Routes from './routes/router';
import HttpError from './middlewares';

const app = express();

app.use(express.json());

app.use(Routes);

app.use(HttpError.handle);

export default app;
