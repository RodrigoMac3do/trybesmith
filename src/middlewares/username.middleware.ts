import { NextFunction, Request, Response } from 'express';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  
  if (!username) {
    res.status(400).json({ message: '"username" is required' });
  } else {
    next();
  }
};

export default validateUsername;
