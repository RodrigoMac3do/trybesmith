import { Request, Response } from 'express';
import { UsersService } from '../services';

export default class UsersController {
  public usersService = new UsersService();

  async create(req: Request, res: Response) {
    const users = req.body;

    await this.usersService.create(users);

    res.status(201).json({
      token: 'eyJhbGciOiJISflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    });
  }
}
