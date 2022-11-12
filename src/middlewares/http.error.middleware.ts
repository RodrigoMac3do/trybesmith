import { ErrorRequestHandler } from 'express';
import HttpException from '../utils/http.exception';

const httpErrorMiddleware: ErrorRequestHandler = (err, req, res) => {
  const { status, message } = err as HttpException;

  return res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;
