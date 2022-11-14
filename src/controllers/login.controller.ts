import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import LoginService from '../services/login.service';

export default class LoginController {
  public service = new LoginService();

  async verify(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;

    const token = await this.service.verify(body);

    return res.status(200).json({ token });
  }
}
