import { RequestHandler } from 'express';
import { UsersService } from '../services';
import { userSchema } from '../services/validations/Schema';
import ValidateSchema from '../services/validations/ValidationSchema';

export default class UsersController {
  private service: UsersService;

  private validateSchema: ValidateSchema;

  constructor() {
    this.service = new UsersService();
    this.validateSchema = new ValidateSchema();
  }

  create: RequestHandler = async (req, res) => {
    const { body } = req;

    await this.validateSchema.validate(userSchema, body);

    const token = await this.service.create(body);

    res.status(201).json({ token });
  };
}
