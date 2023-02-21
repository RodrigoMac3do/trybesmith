import { RequestHandler } from 'express';
import { loginSchema } from '../services/validations/Schema';
import LoginService from '../services/login.service';
import ValidateSchema from '../services/validations/ValidationSchema';

export default class LoginController {
  private service: LoginService;

  private validateSchema: ValidateSchema;

  constructor() {
    this.service = new LoginService();
    this.validateSchema = new ValidateSchema();
  }

  public signIn: RequestHandler = async (req, res) => {
    const { body } = req;

    await this.validateSchema.validate(loginSchema, body);

    const token = await this.service.signIn(body);

    res.status(200).json({ token });
  };
}
