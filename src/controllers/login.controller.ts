import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import { loginSchema } from '../services/validations/schema';
import LoginService from '../services/login.service';
import validateSchema from '../services/validations/validationSchema';

export default class LoginController {
  public service = new LoginService();

  async verify(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;

    await validateSchema(loginSchema, body);

    const token = await this.service.verify(body);

    return res.status(200).json({ token });
  }
}
