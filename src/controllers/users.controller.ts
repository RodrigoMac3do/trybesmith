import { Request, Response } from 'express';
import { UsersService } from '../services';
import { userSchema } from '../services/validations/schema';
import validateSchema from '../services/validations/validationSchema';

export default class UsersController {
  public usersService = new UsersService();

  async create(req: Request, res: Response) {
    const { body } = req;

    await validateSchema(userSchema, body);

    const token = await this.usersService.create(body);

    res.status(201).json({ token });
  }
}
