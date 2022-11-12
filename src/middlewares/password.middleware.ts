import { NextFunction, Request, Response } from 'express';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    res.status(400).json({ message: '"password" is required' });
  } else {
    next();
  }
};

export default validatePassword;
