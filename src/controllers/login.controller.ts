import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public service = new LoginService();

  async verify(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const data = await this.service.verify(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
